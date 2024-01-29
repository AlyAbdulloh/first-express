'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [{
      title: 'Katakan Iya',
      category: 'romance',
      stock: 20,
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('books', null, {});
  }
};