exports.up = async function(knex, Promise) {
    await knex.raw('create extension if not exists "uuid-ossp"');
    return knex.schema.createTable('saved_carts', function(table) {
      table
        .uuid('id')
        .defaultTo(knex.raw('uuid_generate_v4()'))
        .primary();
      table
        .uuid('user_id')
        .unique()
        .notNull()
        .references('id')
        .inTable('users');
      table.dateTime('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    knex.raw('drop extension if exists "uuid-ossp"');
    return knex.schema.dropTable('saved_carts');
  };
  