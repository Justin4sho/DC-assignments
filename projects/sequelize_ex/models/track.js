'use strict';
module.exports = (sequelize, DataTypes) => {
  var track = sequelize.define('track', {
    name: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        track.belongsTo(models.album);
      }
    }
  });
  return track;
};
