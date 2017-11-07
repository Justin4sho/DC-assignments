var pgp = require('pg-promise')({

});
var prompt = require('prompt-promise');

var db = pgp({database: 'music'});

var getUserInputs = new Promise(
  function (resolve, reject) {
    var inputs = [];

    prompt('Please enter the Track name: ')

    .then(function (value) {
      inputs.push(value);
      return prompt('Please enter the Album ID: ');
    })
    .then(function (value) {
      inputs.push(value);
      return prompt('Please enter Track Duration: ');
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

var writeTrack = function (trackName, duration, album_ID) {
  var trackInfo = {
    name: trackName,
    duration: duration,
    album_ID: album_ID,
  };
  var q = 'INSERT INTO track \
    VALUES (default, ${name}, ${duration}, ${album_ID}) RETURNING id';
  db.one(q, trackInfo)
    .then(function (result) {
      console.log('Created Track with ID ',result.id);
    });
}

var main = function () {
  getUserInputs
    .then(function (inputs) {
      var trackName = inputs[0];
      var album_ID = inputs[1];
      var duration = inputs[2];
      writeTrack(trackName, duration, album_ID);
      pgp.end()
    })
    .catch(function (error) {
      console.error(error);
      pgp.end()
    });
}

// Execute the main function
main();
