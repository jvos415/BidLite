'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        }
      },
      jobTitle: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING(300)
      },
      fixtureList: {
        allowNull: true,
        type: Sequelize.STRING(200)
      },
      fixtures: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      estimate: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      cost: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs', options);
  }
};