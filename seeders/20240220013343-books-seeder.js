"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        title: "test book",
        categoryId: 7,
        stock: 5,
      },
      {
        title: "test book2",
        categoryId: 8,
        stock: 4,
      },
      {
        title: "test book3",
        categoryId: 7,
        stock: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
