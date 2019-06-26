
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {bookcode: 1012, title: 'Harry Potter and the Sorcers Stone', publishercode: 110, type: 'FIC'},
        {bookcode: 2178, title: 'Git Pocket Guide', publishercode: 223, type: 'NFI'},
        {bookcode: 8754, title: 'GOOD TALK: A Memoir in Conversations', publishercode: 133, type: 'MEM'}
      ]);
    });
};
