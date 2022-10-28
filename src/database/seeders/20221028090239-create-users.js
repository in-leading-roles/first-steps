'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('users', [{
      id: 1,
      login: 'Admin',
      password: '$2b$05$u3Msqxt6IkBa5VZfN7QJeOq9Bu6xURFh5LYq5AmQ01Dak1q86UeMC',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
