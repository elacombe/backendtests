const fs = require('fs');

exports.readfile = (name) => (callback) => {
  const filename = name + '.txt';
  fs.readFile(filename, 'utf8', callback);
}

exports.toupper = (name) => (callback) => {
  const filename = name + '.txt';
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      return callback(err);
    }
    fs.writeFile(filename, data.toUpperCase(), callback);
  })
}
