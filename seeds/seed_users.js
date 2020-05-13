
exports.seed = (knex) => knex('users').del().then(() => knex('users').insert([

  {
    id: 1,
    fullname: 'Alikaji Jola',
    email: 'alakijs@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdf'
  },
  {
    id: 2,
    fullname: 'louli yolola',
    email: 'louli@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdf4ll244'
  },
  {
    id: 3,
    fullname: 'Kunta kint',
    email: 'kunta@gmail.com',
    password_hash: 'dnbjbb4b4j4b4bj4hb4bj4b4hb4bhbfdffjkfj433k3'
  }
]));
