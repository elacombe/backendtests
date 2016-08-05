const async = require('async');

const fileCreator = require('./filecreator.js');
const fileReader = require('./filereader.js');

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
  async.series({
    makefile: fileCreator.makefile(val),
    addlign: fileCreator.addlign(val, val),
    toupper: fileReader.toupper(val),
    readfile: fileReader.readfile(val),
  }, 
  (err, { readfile }) => {
    if (err) return console.log(err);
    console.log(readfile);
  }
  );
});
