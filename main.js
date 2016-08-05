const fileCreator = require('./filecreator.js');
const fileReader = require('./filereader.js');

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
  fileCreator.makefile(val);
  fileCreator.addlign(val, val);
  fileReader.readfile(val);
  fileReader.toupper(val);
  fileReader.readfile(val);
});
