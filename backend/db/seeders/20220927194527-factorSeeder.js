"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Factors";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 1,
          familyFriend: 15,
          highEnd: 15,
          complicated: 15,
          complicatedClient: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          familyFriend: 15,
          highEnd: 15,
          complicated: 15,
          complicatedClient: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Factors";
    return queryInterface.bulkDelete(options, null, {});
  },
};
