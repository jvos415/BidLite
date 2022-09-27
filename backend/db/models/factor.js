'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factor = sequelize.define('Factor', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    familyFriend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
    },
    familyFriendBool: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    highEnd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
    },
    highEndBool: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    complicated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
    },
    complicatedBool: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    dickhead: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
    },
    dickheadBool: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  Factor.associate = function(models) {
    Factor.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Factor;
};