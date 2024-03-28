'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contatos', {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        tel: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        cell: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: true
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contatos');
  }
};
