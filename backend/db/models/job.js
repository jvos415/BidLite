'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jobTitle: DataTypes.STRING,
    description: DataTypes.STRING,
    fixtureList: DataTypes.STRING,
    fixtures: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};