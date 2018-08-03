const dataurl = require('dataurl');
const fs = require('fs');
const mime = require('mime');
const mm = require('music-metadata');

// Generates Data URI for a given audio file.
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

// Generates Image's Uri for a given audio file. Used for cover art
function generateImageUri(filePath, cb) {
  const mimetype = mime.getType(filePath);
  mm.parseFile(filePath).then((metaData) => {
    cb(dataurl.convert({ data: metaData.common.picture[0].data, mimetype }));
  });
}

module.exports = { generateDataUri, generateImageUri };
