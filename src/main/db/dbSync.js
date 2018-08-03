import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import path from 'path';
import { app } from 'electron';
const DataURI = require('datauri').promise;
// https://github.com/Borewit/music-metadata
const mm = require('music-metadata');

const supportedExtensions = ['.mp3', '.flac', '.aac', '.ogg', '.mp4'];
const db = new DataStore({
  autoload: true,
  filename: path.join(app.getPath('userData'), '/data.db'),
});

async function addMusicFileToDatabase(filePath, fileMetaData, dataUri) {
  db.findOne({ path: filePath }, (err, doc) => {
    if (doc === null && !err) {
      const doc = {
        path: filePath,
        dateAdded: new Date(),
        isFavorite: false,
        duration: fileMetaData.format.duration,
        dataUri,
        // Music MetaData
        artist: fileMetaData.common.artist || 'Unknown Artist',
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

jetpack.listAsync(app.getPath('music')).then((list) => {
  list.forEach(async (file) => {
    const filePath = path.join(app.getPath('music'), file);
    if (supportedExtensions.indexOf(path.extname(file)) > -1) {
      const metaData = await mm.parseFile(filePath, { duration: true });

      const dataUri = await DataURI(filePath);
      await addMusicFileToDatabase(filePath, metaData, dataUri);
    }
  });
});
