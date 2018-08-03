import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
import ffmetadata from 'ffmetadata';
import path from 'path';
import { app } from 'electron';

const supportedExtensions = ['.mp3', '.flac', '.aac', '.ogg', '.mp4'];

const db = new DataStore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db'),
});
jetpack.listAsync(app.getPath('music')).then((list) => {
  list.forEach((file) => {
    if (supportedExtensions.indexOf(path.extname(file)) > -1) {
      ffmetadata.read(path.join(app.getPath('music'), file), (err, data) => {
        if (err) console.error('Error reading metadata', err);
        else {
          console.log(data);
        }
      });
    }
  });
});
