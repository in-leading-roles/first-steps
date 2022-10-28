'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_events', {
      id: {
        type: Sequelize.DataTypes.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
      },
      eventId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'events',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_events');
  },
};
