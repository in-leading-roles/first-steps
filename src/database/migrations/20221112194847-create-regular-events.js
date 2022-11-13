'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('regular_events', {
      id: {
        type: Sequelize.DataTypes.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
      },
      repeatEvery: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      eventId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'events',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('regular_events');
  }
};
