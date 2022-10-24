'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_roles', {
      id: {
        type: Sequelize.DataTypes.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
      },
      roleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'roles',
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
    return queryInterface.dropTable('users_roles');
  },
};
