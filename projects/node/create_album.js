var pgp = require('pg-promise')({

});
var prompt = require('prompt-promise');

var db = pgp({database: 'music'});

var getUserInputs = new Promise(
  function (resolve, reject) {
    var inputs = [];

    prompt('Please enter the Album name: ')

    .then(function (value) {
      inputs.push(value);
      return prompt('Please enter the year of the album: ');
    })
    .then(function (value) {
      inputs.push(value);
      return prompt('Please enter the artist ID: ');
    })
    // then save the file name and return as resolved
    .then(function (value) {
      inputs.push(value);
      prompt.done();
      resolve(inputs);
    })
    // catch errors while prompting and return as rejected
    .catch(function (error) {
      prompt.finish();
      reject(error);
    });
  }
);

var writeAlbum = function (albumName, albumYear, artistID) {
  var albumInfo = {
    name: albumName,
    year: albumYear,
    artist_ID: artistID
  };
  var q = 'INSERT INTO album \
    VALUES (default, ${name}, ${year}, ${artist_ID})';
  db.result(q, albumInfo)
    .then(function (result) {
      console.log(result);
    });
}

var main = function () {
  getUserInputs
    .then(function (inputs) {
      var albumName = inputs[0];
      var albumYear = inputs[1];
      var artistID = inputs[2]:
      writeAlbum(albumName, albumYear, artistID);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Execute the main function
main();
