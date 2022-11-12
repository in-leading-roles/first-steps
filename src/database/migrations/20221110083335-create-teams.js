'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('teams', {
      id: {
        type: Sequelize.DataTypes.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
      },
      value: {
        type: Sequelize.DataTypes.STRING, 
        unique: true, 
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.STRING, 
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('teams');
  }
};
