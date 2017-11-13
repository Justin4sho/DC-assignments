var prompt = require('prompt-promise');
var db = require('./models');

var getUserInputs = new Promise(
  function (resolve, reject) {
    var inputs = [];

    prompt('Please enter the Artist name: ')
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

var writeArtist = function (artistName) {
  db.artist.create({name:artistName})
  .then(function (artist) {
    console.log(artist);
    db.sequelize.close();
  });
}

var main = function () {
  getUserInputs
    .then(function (inputs) {
      var artistName = inputs[0];
      writeArtist(artistName);

    })
    .catch(function (error) {
      console.error(error);
    });
}

// Execute the main function
main();
