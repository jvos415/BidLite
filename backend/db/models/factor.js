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
    highEnd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
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
    complicatedClient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
        max: 100
      }
    }
  }, {});
  Factor.associate = function(models) {
    Factor.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Factor;
};