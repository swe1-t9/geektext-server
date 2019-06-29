exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('home_addresses', function(table) {
    table
      .string('home_address_id')
      .notNull()
      .primary();
    table
      .string('user_id')
      .notNull()
      .unique()
    table.string('address_id').notNull()
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('home_addresses');
};
