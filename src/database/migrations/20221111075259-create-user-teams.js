'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users_teams', {
      id: {
        type: Sequelize.DataTypes.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
      },
      teamId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'teams',
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
  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users_teams');
  }
};
