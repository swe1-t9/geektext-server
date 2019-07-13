exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('authors').del()
      .then(function () {
        // Inserts seed entries
        return knex('authors').insert([
          {id: '00000000-0000-0000-0000-000000000001', first_name: 'JK', last_name: 'Rowling', bio: 'J.K. Rowling is the creator of the \'Harry Potter\' fantasy series, one of the most popular book and film franchises in history.'},
          {id: '00000000-0000-0000-0000-000000000002', first_name: 'George RR', last_name: 'Martin', bio: 'Fantasy writer George R. R. Martin created the \'A Song of Ice and Fire\' series, which became the basis of the celebrated HBO show \'Game of Thrones.\''},
          {id: '00000000-0000-0000-0000-000000000003', first_name: 'George', last_name: 'Orwell', bio: 'George Orwell was an English novelist, essayist, and critic most famous for his novels \'Animal Farm\' (1945) and \'Nineteen Eighty-Four\' (1949).'},
          {id: '00000000-0000-0000-0000-000000000004', first_name: 'Stephen', last_name: 'Hawking', bio: 'Scientist Stephen Hawking was known for his groundbreaking work with black holes and relativity, and was the author of several popular science books including \'A Brief History of Time.\''},
          {id: '00000000-0000-0000-0000-000000000005', first_name: 'Joseph', last_name: 'Heller', bio: 'Joseph Heller was an American satirical novelist, short story writer, and playwright, best known as the author of Catch-22, a celebrated antiwar novel.'},
          {id: '00000000-0000-0000-0000-000000000006', first_name: 'Ray', last_name: 'Bradbury', bio: 'American fantasy and horror author Ray Bradbury is best known for his novels \'Fahrenheit 451,\' \'The Illustrated Man\' and \'The Martian Chronicles.\''},
          {id: '00000000-0000-0000-0000-000000000007', first_name: 'Margaret', last_name: 'Atwood', bio: 'Margaret Atwood is an award-winning Canadian poet, novelist and essayist known for books like \'The Circle Game,\' \'The Handmaid’s Tale,\' \'Cat\'s Eye,\' \'The Blind Assassin\' and \'Oryx and Crake,\' among an array of other works.'},
          {id: '00000000-0000-0000-0000-000000000008', first_name: 'JRR', last_name: 'Tolkien', bio: 'John Ronald Reuel Tolkien CBE FRSL was an English writer, poet, philologist, and academic, who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.'},
          {id: '00000000-0000-0000-0000-000000000009', first_name: 'Ernest', last_name: 'Hemingway', bio: 'Ernest Miller Hemingway was an American journalist, novelist, short-story writer, and sportsman. His economical and understated style—which he termed the iceberg theory—had a strong influence on 20th-century fiction.'},
          {id: '00000000-0000-0000-0000-00000000000a', first_name: 'F. Scott', last_name: 'Fitzgerald', bio: 'Francis Scott Key Fitzgerald was an American fiction writer, whose works helped to illustrate the flamboyance and excess of the Jazz Age.'},
          {id: '00000000-0000-0000-0000-00000000000b', first_name: 'Harper', last_name: 'Lee', bio: 'Nelle Harper Lee was an American novelist widely known for To Kill a Mockingbird, published in 1960. Immediately successful, it won the 1961 Pulitzer Prize and has become a classic of modern American literature.'},
        ]);
      });
  };