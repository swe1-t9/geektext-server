exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('reviews', function(table) {
    table
      .uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();
    table
      .uuid('user_id')
      .notNull()
      .references('id')
      .inTable('users');
    table
      .uuid('book_id')
      .notNull()
      .references('id')
      .inTable('books');
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
