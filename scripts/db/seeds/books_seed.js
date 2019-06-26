
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1012, title: 'Harry Potter and the Sorcers Stone', author_id: 110, genre: 'FIC'},
        {id: 2178, title: 'Git Pocket Guide', author_id: 223, genre: 'NFI'},
        {id: 8754, title: 'GOOD TALK: A Memoir in Conversations', author_id: 133, genre: 'MEM'}
      ]);
    });
};
