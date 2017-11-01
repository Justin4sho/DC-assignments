// Cat 2 Files
//
// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

var fs = require('fs-extra');



var file1 = 'file1.txt';
var file2 = 'file2.txt';
var file3 = 'file3.txt';
var cat = function(file1,file2,file3) {
  fs.copy(file1,file3,{overwrite:false}).then(function(){
    console.log('success');
  }).then(function(){
    fs.copy(file2,file3,{overwrite:false}).then(function(){
      console.log('success 2');
    })
  })
}
cat(file1,file2,file3);
