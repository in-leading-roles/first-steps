'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    
  const roles = await queryInterface.sequelize.query(
    `SELECT id from roles;`
  );
  const users = await queryInterface.sequelize.query(
    `SELECT id from users;`
  );
  const rolesRows = roles[0];
  const usersRows = users[0];

    return queryInterface.bulkInsert('users_roles', [{
      roleId: rolesRows[0].id,
      userId: usersRows[0].id
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users_roles', null, {});
  }
};
