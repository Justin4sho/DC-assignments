// Cat 2 Files
//
// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

// var fs = require('fs-extra');
var fs = require('fs-promise');

var file1 = 'file1.txt';
var file2 = 'file2.txt';
var file3 = 'file3.txt';
var buffer = '';
var cat = function(file1,file2,file3) {
  // newstring = '';
  fs.readFile(file1).then(function(buffer){
    newstring = buffer.toString();
    console.log('Success 1');
    return fs.readFile(file2);
  }).then(function(buffer) {
    newstring += buffer.toString();
    console.log('success 2');
    return fs.writeFile(file3,newstring);
  }).then(function (){
    console.log('write done');
  }).catch(function (error) {
    console.log(error);
  });
}




cat(file1,file2,file3);

// var p = fs.readFile(file1);
//
// p.then(function(buffer) {
//   console.log(buffer.toString());
// })
