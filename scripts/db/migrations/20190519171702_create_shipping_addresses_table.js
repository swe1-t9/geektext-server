exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('shipping_addresses', function(table) {
    table
      .uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();
    table
      .uuid('user_id')
      .notNull()
      .references('id')
      .inTable('users');
    table.string('address_line_1').notNull();
    table.string('address_line_2').nullable();
    table.string('address_line_3').nullable();
    table.string('city').notNull();
    table.string('region').nullable();
    table.string('country').notNull();
    table.string('postal_code').notNull();
    table.boolean('is_default').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('shipping_addresses');
};
