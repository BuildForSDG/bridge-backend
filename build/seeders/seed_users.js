'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: 1,
    fullname: 'Alikaji Jola',
    email: 'alakijs@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdf',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    fullname: 'louli yolola',
    email: 'louli@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdf4ll244',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 3,
    fullname: 'Kunta kint',
    email: 'kunta@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdffjkfj433k3',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
//# sourceMappingURL=seed_users.js.map