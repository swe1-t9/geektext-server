exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('reviews', function(table) {
    table
      .string('reviews_id')
      .notNull()
      .primary();
    table.string('user_id').notNull()
    table.string('book_id').notNull()
    table.string('title').notNull();
    table.string('body').notNull();
    table.integer('rating').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('reviews');
};
