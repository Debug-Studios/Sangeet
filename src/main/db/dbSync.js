/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import path from 'path';
import settings from 'electron-settings';
import { app, ipcMain } from 'electron'; // eslint-disable-line
// https://github.com/Borewit/music-metadata
const mm = require('music-metadata');

const supportedExtensions = ['.mp3', '.flac', '.aac', '.ogg', '.mp4', '.m4a'];
const db = new DataStore({
  autoload: true,
  filename: path.join(app.getPath('userData'), '/data.db'),
});

async function addMusicFileToDatabase(filePath, fileMetaData) {
  db.findOne({ path: filePath }, (err, doc) => {
    if (doc === null) {
      const doc = {
        path: filePath,
        dateAdded: new Date(),
        isFavorite: false,
        duration: fileMetaData.format.duration,
        // Music MetaData
        artist: fileMetaData.common.artist || fileMetaData.common.albumartist || 'Unknown Artist',
        album: fileMetaData.common.album || 'Unknown Album',
        albumArtist: fileMetaData.common.albumartist,
        title: fileMetaData.common.title || 'Unknown Title',
        track: fileMetaData.common.track,
        genre: fileMetaData.common.genre,
        year: fileMetaData.common.year,
      };

      db.insert(doc);
    }
  });
}

// Recursively goes through a folder, retrieves the metadata of files and adds them to database.
export async function listMusicFiles() {
  let scanPaths = settings.get('scanPaths');
  scanPaths = settings.get('scanPaths');

  // Recursively go through all paths
  scanPaths.forEach(async (syncPath) => {
    // Go through all subfolders inside a path
    const pathTree = await jetpack.inspectTreeAsync(syncPath, { relativePath: false });
    pathTree.children.forEach(async (child) => {
      if (child.type === 'dir') {
        // If directory, then go 1 level deep to find music files.
        const dirPath = path.join(syncPath, child.name);
        const filesList = await jetpack.listAsync(dirPath);
        filesList.forEach(async (file) => {
          const filePath = path.join(dirPath, file);
          if (supportedExtensions.indexOf(path.extname(file)) > -1) {
            const metaData = await mm.parseFile(filePath, { duration: true, native: true });
            // Files with no metadata have no titles.
            if (!metaData.common.title) {
              metaData.common.title = file;
            }

            await addMusicFileToDatabase(filePath, metaData);
          }
        });
      } else {
        // If not a file then check and add to database
        const filePath = path.join(syncPath, child.name);
        if (supportedExtensions.indexOf(path.extname(child.name)) > -1) {
          const metaData = await mm.parseFile(filePath, { duration: true, native: true });
          // Files with no metadata have no titles.
          if (!metaData.common.title) {
            metaData.common.title = child.name;
          }

          await addMusicFileToDatabase(filePath, metaData);
        }
      }
    });
  });
}

// Delete database records of files which are not available at their paths.
export async function deleteBrokenRecords() {
  if (!settings.has('scanPaths')) {
    settings.set('scanPaths', [app.getPath('music')]);
  }
  let scanPaths = settings.get('scanPaths');
  if (scanPaths.length <= 0) {
    settings.set('scanPaths', [app.getPath('music')]);
  }
  scanPaths = settings.get('scanPaths');
  db.find({}, (err, docs) => {
    docs.forEach(async (doc) => {
      const exists = await jetpack.existsAsync(doc.path);
      if (!exists) {
        scanPaths.forEach((path) => {
          if (path.indexOf(doc.path) < 0) {
            db.remove({ _id: doc._id });
          }
        });
      }
    });
  });
}
