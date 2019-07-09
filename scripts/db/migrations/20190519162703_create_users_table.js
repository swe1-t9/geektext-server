exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('users', function(table) {
    table
      .string('user_id')
      .notNull()
      .primary();
    table
      .string('email')
      .notNull()
      .unique();
    table.string('password').notNull();
    table.string('first_name').notNull();
    table.string('last_name').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('users');
};
