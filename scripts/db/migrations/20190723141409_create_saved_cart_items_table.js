exports.up = async function(knex, Promise) {
    await knex.raw('create extension if not exists "uuid-ossp"');
    return knex.schema.createTable('saved_cart_items', function(table) {
      table
        .uuid('id')
        .defaultTo(knex.raw('uuid_generate_v4()'))
        .primary();
      table
        .uuid('saved_cart_id')
        .notNull()
        .references('id')
        .inTable('saved_carts');
      table
        .uuid('book_id')
        .notNull()
        .references('id')
        .inTable('books');
      table
        .integer('amount')
        .notNull();
      table.dateTime('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    knex.raw('drop extension if exists "uuid-ossp"');
    return knex.schema.dropTable('saved_cart_items');
  };
  