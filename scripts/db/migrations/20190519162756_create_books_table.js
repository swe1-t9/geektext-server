exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable('books', function(table) {
    table
      .integer('id')
      .notNull()
      .primary();
    table
      .string('isbn')
      .notNull()
      .unique();
    table
      .integer('author_id')
      .notNull()
      // .references('id')
      // .inTable('authors');
    table.integer('price').notNull();
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
