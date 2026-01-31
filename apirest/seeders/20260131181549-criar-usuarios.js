'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('sapo123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz12',
          email: 'luiz12@gmail.com',
          password_hash: await bcryptjs.hash('sapo123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz13',
          email: 'luiz13@gmail.com',
          password_hash: await bcryptjs.hash('lula123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
