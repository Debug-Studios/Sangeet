/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import path from 'path';
import settings from 'electron-settings';
import { app } from 'electron'; // eslint-disable-line
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
async function listMusicFiles() {
  if (!settings.has('scanPaths')) {
    settings.set('scanPaths', [app.getPath('music')]);
  }
  let syncPaths = settings.get('scanPaths');
  if (syncPaths.length <= 0) {
    settings.set('scanPaths', [app.getPath('music')]);
  }
  syncPaths = settings.get('scanPaths');
  syncPaths.forEach((syncPath) => {
    jetpack.listAsync(syncPath).then((list) => {
      list.forEach(async (file) => {
        const filePath = path.join(app.getPath('music'), file);
        if (supportedExtensions.indexOf(path.extname(file)) > -1) {
          const metaData = await mm.parseFile(filePath, { duration: true, native: true });
          // Files with no metadata have no titles.
          if (!metaData.common.title) {
            metaData.common.title = file;
          }

          await addMusicFileToDatabase(filePath, metaData);
        }
      });
    });
  });
}

// Delete database records of files which are not available at their paths.
async function deleteBrokenRecords() {
  db.find({}, (err, docs) => {
    docs.forEach(async (doc) => {
      const exists = await jetpack.existsAsync(doc.path);
      if (!exists) {
        db.remove({ _id: doc._id });
      }
    });
  });
}

// Starts here
(async () => {
  await deleteBrokenRecords();
  await listMusicFiles();
})();
