
var prompt = require('prompt-promise');

var db = require('./models');

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
    .then(function (value) {
      inputs.push(value);
      return prompt('Would you like to enter another? Y or N  ');
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

var writeAlbum = function (albumName, albumYear, artist_ID) {
  db.album.create({name:albumName, year:albumYear, artistId:artist_ID})
  .then(function (album) {
    console.log(album);
    db.sequelize.close();
  });
}

var main = function () {
  var again = "Y";
  while (again == "Y") {
    getUserInputs
      .then(function (inputs) {
        var albumName = inputs[0];
        var albumYear = inputs[1];
        var artistID = inputs[2];
        var again = inputs[3];
        writeAlbum(albumName, albumYear, artistID);
        console.log(inputs);


      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

// Execute the main function
main();
