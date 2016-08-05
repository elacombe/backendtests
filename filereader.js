const fs = require('fs');
const fileCreator = require('./filecreator.js');

exports.readfile = (name) => {
  const filename = name + '.txt';
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      return console.log('readfile error : ', err);
    }
    console.log('readfile de : ', name, ' data: ', data)
  })
}

exports.toupper = (name) => {
  const filename = name + '.txt';
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      return console.log('toupper error : ', err);
    }
    fs.writeFile(filename, data.toUpperCase(), function (err) {
      if (err) {
        return console.log('to upper write error : ', err);
      }
    })
  })
}
