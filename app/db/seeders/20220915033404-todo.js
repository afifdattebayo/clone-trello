'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert('Todos', [
      {
        name: 'Doing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Done',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
   
    //  * Add commands to revert seed here.
    //  *
    //  * Example:
     await queryInterface.bulkDelete('Todos', null, {});
   
  }
};
