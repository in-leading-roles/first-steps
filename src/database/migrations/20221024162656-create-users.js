'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      login: {
        type: Sequelize.DataTypes.STRING, 
        unique: true, 
        allowNull:false
      },
      email: {
        type: Sequelize.DataTypes.STRING, 
        unique: false, 
        allowNull:true
      },
      password: {
        type: Sequelize.DataTypes.STRING, 
        allowNull:false
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
    return queryInterface.dropTable('users');
  },
};
