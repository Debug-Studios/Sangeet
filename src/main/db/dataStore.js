// All database related functions and configurations

import path from 'path';
import DataStore from 'nedb';
import { remote } from 'electron'; // eslint-disable-line

export default new DataStore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db'),
});
