exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('home_addresses', function(table) {
    table
      .integer('id')
      .notNull()
      .primary();
    table
      .integer('user_id')
      .notNull()
      .unique()
      .references('id')
      .inTable('users');
    table
      .integer('address_id')
      .notNull()
      .references('id')
      .inTable('addresses');
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('home_addresses');
};
