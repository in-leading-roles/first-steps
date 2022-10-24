'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles', {
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
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('roles');
  },
};
