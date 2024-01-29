'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'title',
      },
      category: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'category'
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'stock',
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('books');
     
  }
};
