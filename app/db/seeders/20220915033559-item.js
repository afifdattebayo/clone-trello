'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     
     * Example:
    **/
    await queryInterface.bulkInsert('Items', [
      {
        name: 'clone trello',
        TodoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'coding',
        TodoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'nextjs',
        TodoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example: */
    await queryInterface.bulkDelete('Items', null, {});

  }
};
