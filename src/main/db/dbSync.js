// import DataStore from 'nedb';
import jetpack from 'fs-jetpack';
// import path from 'path';
import { app } from 'electron';

// const db = new DataStore({
//   autoload: true,
//   filename: path.join(remote.app.getPath('userData'), '/data.db'),
// });
jetpack.listAsync(app.getPath('music')).then((list) => {
  console.log(list);
});
