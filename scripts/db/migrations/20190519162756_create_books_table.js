exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('books', function(table) {
    table
      .string('book_id')
      .notNull()
      .primary();
    table
      .string('isbn')
      .notNull()
      .unique();
    table.string('author_id').notNull()
    table.string('price').notNull();
    table.string('title').notNull();
    table.string('genre').notNull();
    table.integer('publish_year').notNull();
    table.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTable('books');
};
