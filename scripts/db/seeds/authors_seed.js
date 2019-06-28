exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('authors').del()
      .then(function () {
        // Inserts seed entries
        return knex('authors').insert([
          {id: 1, first_name: 'JK', last_name: 'Rowling'},
          {id: 2, first_name: 'George RR', last_name: 'Martin'},
          {id: 3, first_name: 'George', last_name: 'Orwell'},
          {id: 4, first_name: 'Stephen', last_name: 'Hawking'},
          {id: 5, first_name: 'Joseph', last_name: 'Heller'},
          {id: 6, first_name: 'Ray', last_name: 'Bradbury'},
          {id: 7, first_name: 'Margaret', last_name: 'Atwood'},
          {id: 8, first_name: 'JRR', last_name: 'Tolkien'},
          {id: 9, first_name: 'Ernest', last_name: 'Hemingway'},
          {id: 10, first_name: 'F. Scott', last_name: 'Fitzgerald'},
          {id: 11, first_name: 'Harper', last_name: 'Lee'},
        ]);
      });
  };