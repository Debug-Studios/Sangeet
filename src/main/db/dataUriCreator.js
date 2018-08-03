const dataurl = require('dataurl');
const fs = require('fs');
const mime = require('mime');

function generateDataUri(filePath, cb) {
  let mimetype = mime.getType(filePath);
  // HACK: Chrome can't seem to play data uris with audio/x-flac mime type,
  // but is perfectly fine with audio/flac :#
  if (mimetype === 'audio/x-flac') {
    mimetype = 'audio/flac';
  }
  fs.readFile(filePath, (err, data) => {
    cb(dataurl.convert({ data, mimetype }));
  });
}

module.exports = generateDataUri;
