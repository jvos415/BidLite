'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 40]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 300]
      }
    },
    fixtureList: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 200]
      }
    },
    fixtures: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Job.associate = function(models) {
    Job.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Job;
};