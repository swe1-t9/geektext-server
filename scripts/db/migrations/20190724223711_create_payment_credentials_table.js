exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('payment_credentials', function(table) {
    table
      .uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();
    table
      .uuid('user_id')
      .notNull()
      .references('id')
      .inTable('users');
    table.string('stripe_token', 2047).notNull();
    table.string('card_association').notNull();
    table.integer('last_four_digits').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('payment_credentials');
};
