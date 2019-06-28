exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('authors').del()
      .then(function () {
        // Inserts seed entries
        return knex('authors').insert([
          {author_id: '1', first_name: 'JK', last_name: 'Rowling'},
          {author_id: '2', first_name: 'George RR', last_name: 'Martin'},
          {author_id: '3', first_name: 'George', last_name: 'Orwell'},
          {author_id: '4', first_name: 'Stephen', last_name: 'Hawking'},
          {author_id: '5', first_name: 'Joseph', last_name: 'Heller'},
          {author_id: '6', first_name: 'Ray', last_name: 'Bradbury'},
          {author_id: '7', first_name: 'Margaret', last_name: 'Atwood'},
          {author_id: '8', first_name: 'JRR', last_name: 'Tolkien'},
          {author_id: '9', first_name: 'Ernest', last_name: 'Hemingway'},
          {author_id: '10', first_name: 'F. Scott', last_name: 'Fitzgerald'},
          {author_id: '11', first_name: 'Harper', last_name: 'Lee'},
        ]);
      });
  };