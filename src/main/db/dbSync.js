import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import ffmetadata from 'ffmetadata';
import path from 'path';
import { app } from 'electron';

const supportedExtensions = ['.mp3', '.flac', '.aac', '.ogg', '.mp4'];
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
        // FF-Metadata's Data
        artist: fileMetaData.artist || 'Unknown Artist',
        album: fileMetaData.album || 'Unknown Album',
        title: fileMetaData.title || 'Unknown Title',
        track: fileMetaData.track,
        disc: fileMetaData.disc,
        label: fileMetaData.label,
        date: fileMetaData.date,
      };

      db.insert(doc);
    }
  });
}

jetpack.listAsync(app.getPath('music')).then((list) => {
  list.forEach((file) => {
    if (supportedExtensions.indexOf(path.extname(file)) > -1) {
      ffmetadata.read(path.join(app.getPath('music'), file), async (err, data) => {
        if (err) console.error('Error reading metadata', err);
        else {
          await addMusicFileToDatabase(path.join(app.getPath('music'), file), data);
        }
      });
    }
  });
});
