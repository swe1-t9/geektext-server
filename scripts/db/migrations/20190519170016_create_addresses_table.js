exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('addresses', function(table) {
    table
      .integer('id')
      .notNull()
      .primary();
    table.string('address_line_1').notNull();
    table.string('address_line_2').nullable();
    table.string('address_line_3').nullable();
    table.string('city').notNull();
    table.string('region').nullable();
    table.string('country').notNull();
    table.string('postal_code').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('addresses');
};
