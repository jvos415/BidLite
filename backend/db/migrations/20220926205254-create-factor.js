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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users"
        }
      },
      familyFriend: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      familyFriendBool: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      highEnd: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      highEndBool: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      complicated: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      complicatedBool: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      complicatedClient: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      complicatedClientBool: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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