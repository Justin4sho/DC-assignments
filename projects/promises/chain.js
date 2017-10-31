// Chaining
//
// Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename. The function should chain the two promises together to download the URL and then save the file.

var fs = require('fs-extra');
var rp = require('request-promise');

var url = 'https://weather.justinrboyd.com';
var filename = 'file1.txt';


var saveWebPage = function(url,filename) {
  rp(url).then(function(htmlString){
    return fs.outputFile(filename,htmlString);
  }).then(() => console.log('success!'));
}


saveWebPage(url,filename);
