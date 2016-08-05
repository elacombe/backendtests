const fs = require('fs');

exports.makefile = (name) => (callback) => {
  const filename = name + '.txt';
  setTimeout(() => {
    fs.writeFile(filename, '', callback);
  }, 1000);
}

exports.addlign = (name, text) => (callback) => {
  const filename = name + '.txt';
  fs.appendFile(filename, text, callback);
}
