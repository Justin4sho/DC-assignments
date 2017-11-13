var prompt = require('prompt-promise');
var db = require('./models');

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

    .then(function (value) {
      inputs.push(value);
      prompt.done();
      resolve(inputs);
    })

    .catch(function (error) {
      prompt.finish();
      reject(error);
    });
  }
);

var writeTrack = function (trackName, duration, album_ID) {
  db.track.create({name:trackName,duration:duration,albumId:album_ID})
  .then(function (track) {
    console.log(track);
    db.sequelize.close();
  });
}

var main = function () {
  getUserInputs
    .then(function (inputs) {
      var trackName = inputs[0];
      var album_ID = inputs[1];
      var duration = inputs[2];
      writeTrack(trackName, duration, album_ID);

    })
    .catch(function (error) {
      console.error(error);

    });
}

// Execute the main function
main();
