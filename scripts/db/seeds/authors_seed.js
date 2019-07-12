exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('authors').del()
      .then(function () {
        // Inserts seed entries
        return knex('authors').insert([
          {id: '00000000-0000-0000-0000-000000000001', first_name: 'JK', last_name: 'Rowling'},
          {id: '00000000-0000-0000-0000-000000000002', first_name: 'George RR', last_name: 'Martin'},
          {id: '00000000-0000-0000-0000-000000000003', first_name: 'George', last_name: 'Orwell'},
          {id: '00000000-0000-0000-0000-000000000004', first_name: 'Stephen', last_name: 'Hawking'},
          {id: '00000000-0000-0000-0000-000000000005', first_name: 'Joseph', last_name: 'Heller'},
          {id: '00000000-0000-0000-0000-000000000006', first_name: 'Ray', last_name: 'Bradbury'},
          {id: '00000000-0000-0000-0000-000000000007', first_name: 'Margaret', last_name: 'Atwood'},
          {id: '00000000-0000-0000-0000-000000000008', first_name: 'JRR', last_name: 'Tolkien'},
          {id: '00000000-0000-0000-0000-000000000009', first_name: 'Ernest', last_name: 'Hemingway'},
          {id: '00000000-0000-0000-0000-00000000000a', first_name: 'F. Scott', last_name: 'Fitzgerald'},
          {id: '00000000-0000-0000-0000-00000000000b', first_name: 'Harper', last_name: 'Lee'},
        ]);
      });
  };