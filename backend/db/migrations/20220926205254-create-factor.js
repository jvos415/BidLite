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
      highEnd: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      complicated: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      complicatedClient: {
        type: Sequelize.INTEGER,
        defaultValue: 15
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