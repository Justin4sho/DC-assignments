'use strict';
module.exports = (sequelize, DataTypes) => {
  var album = sequelize.define('album', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here        
      }
    }
  });
  return album;
};
