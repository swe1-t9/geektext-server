
const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, isbn: '222d', title: 'Harry Potter and the Sorcers Stone', author_id: 1, genre: 'FIC', publish_year: '1997', price: '10'},
        {id: 2, isbn: '123y', title: 'Harry Potter and the Chamber of Secrets', author_id: 1, genre: 'FIC', publish_year: '1998', price: '11'}
      ]);
    });
};
