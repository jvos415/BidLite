'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factor = sequelize.define('Factor', {
    userId: DataTypes.INTEGER,
    familyFriend: DataTypes.INTEGER,
    familyFriendBool: DataTypes.BOOLEAN,
    highEnd: DataTypes.INTEGER,
    highEndBool: DataTypes.BOOLEAN,
    complicated: DataTypes.INTEGER,
    complicatedBool: DataTypes.BOOLEAN,
    dickhead: DataTypes.INTEGER,
    dickheadBool: DataTypes.BOOLEAN
  }, {});
  Factor.associate = function(models) {
    // associations can be defined here
  };
  return Factor;
};