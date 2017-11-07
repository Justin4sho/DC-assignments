var pgp = require('pg-promise')({

});
var prompt = require('prompt-promise');

var db = pgp({database: 'music'});

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
  var artistInfo = {
    name: artistName
  };
  var q = 'INSERT INTO artist \
    VALUES (default, ${name}) RETURNING id';
  db.one(q, artistInfo)
    .then(function (result) {
      console.log('Created artist with ID ', result.id);
    });
}

var main = function () {
  getUserInputs
    .then(function (inputs) {
      var artistName = inputs[0];
      writeArtist(artistName);
      pgp.end()
    })
    .catch(function (error) {
      console.error(error);
      pgp.end()
    });
}

// Execute the main function
main();
