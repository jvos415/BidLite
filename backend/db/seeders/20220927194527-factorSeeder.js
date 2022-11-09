"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Factors",
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
    return queryInterface.bulkDelete("Factors", null, {});
  },
};
