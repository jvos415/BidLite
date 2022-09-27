'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Factors', [
        {
          userId: 1,
          familyFriend: 15,
          familyFriendBool: false,
          highEnd: 15,
          highEndBool: false,
          complicated: 15,
          complicatedBool: false,
          dickhead: 15,
          dickheadBool: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          familyFriend: 15,
          familyFriendBool: false,
          highEnd: 15,
          highEndBool: false,
          complicated: 15,
          complicatedBool: false,
          dickhead: 15,
          dickheadBool: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Factors', null, {});
  }
};
