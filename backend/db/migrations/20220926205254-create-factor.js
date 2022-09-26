'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Factors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      familyFriend: {
        type: Sequelize.INTEGER
      },
      familyFriendBool: {
        type: Sequelize.BOOLEAN
      },
      highEnd: {
        type: Sequelize.INTEGER
      },
      highEndBool: {
        type: Sequelize.BOOLEAN
      },
      complicated: {
        type: Sequelize.INTEGER
      },
      complicatedBool: {
        type: Sequelize.BOOLEAN
      },
      dickhead: {
        type: Sequelize.INTEGER
      },
      dickheadBool: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Factors');
  }
};