exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('fullname').notNullable();
  table.string('email').unique().notNullable();
  table.string('password_hash').notNullable();
  table.string('phone');
  table.string('gender');
  table.date('dob');
  table.string('nationality');
  table.string('state');
  table.string('city');
  table.string('status');
  table.text('bio');
  table.string('profile_pic');
  table.boolean('confirmed').defaultTo(false);
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTableIfExists('users');
