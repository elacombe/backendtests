const fs = require('fs');

exports.makefile = (name) => {
  const filename = name + '.txt';
  fs.writeFile(name, '', function(err) {
    if (err) {
      return console.log('makefile error : ', err);
    }
    console.log('created file : ', name);
  })
}

exports.addlign = (name, text) => {
  const filename = name + '.txt';
  fs.appendFile(filename, text, function(err) {
    if (err) {
      return console.log('addlign error : ', err);
    }
  })
}
