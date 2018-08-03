import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import mm from 'musicmetadata';
import ffprobe from 'node-ffprobe';
import path from 'path';
import { app } from 'electron';

const supportedExtensions = ['.mp3', '.flac', '.aac', '.ogg', '.mp4'];
const db = new DataStore({
  autoload: true,
  filename: path.join(app.getPath('userData'), '/data.db'),
});

async function addMusicFileToDatabase(filePath, fileMetaData) {
  db.findOne({ path: filePath }, (err, doc) => {
    if (doc === null && !err) {
      const doc = {
        path: filePath,
        dateAdded: new Date(),
        isFavorite: false,
        // Music MetaData
        artist: fileMetaData.artist || 'Unknown Artist',
        album: fileMetaData.album || 'Unknown Album',
        albumArtist: fileMetaData.albumartist,
        title: fileMetaData.title || 'Unknown Title',
        track: fileMetaData.track,
        disc: fileMetaData.disc,
        genre: fileMetaData.genre,
        date: fileMetaData.year,
        duration: fileMetaData.duration,
      };

      db.insert(doc);
    }
  });
}

jetpack.listAsync(app.getPath('music')).then((list) => {
  list.forEach((file) => {
    const filePath = path.join(app.getPath('music'), file);
    if (supportedExtensions.indexOf(path.extname(file)) > -1) {
      mm(jetpack.createReadStream(filePath), { duration: true }, async (err, data) => {
        if (err) {
          // Fallback to node-ffprobe to get duration and other essential details.
          ffprobe(filePath, async (err, probeData) => {
            await addMusicFileToDatabase(filePath, { duration: probeData.format.duration });
          });
        } else {
          await addMusicFileToDatabase(filePath, data);
        }
      });
    }
  });
});
