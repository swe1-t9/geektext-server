
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: '00000000-0000-0000-0000-000000000001', isbn: '0-7475-3269-9', title: 'Harry Potter and the Sorcers Stone', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '1997', price: '10.20'},
        {id: '00000000-0000-0000-0000-000000000002', isbn: '0-7475-3849-2', title: 'Harry Potter and the Chamber of Secrets', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '1998', price: '11.00'},
        {id: '00000000-0000-0000-0000-000000000003', isbn: '0-7475-4215-5', title: 'Harry Potter and the Prisioner of Azkaban', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '1999', price: '11.99'},
        {id: '00000000-0000-0000-0000-000000000004', isbn: '0-7475-4624-X', title: 'Harry Potter and the Goblet of Fire', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '2000', price: '11.21'},
        {id: '00000000-0000-0000-0000-000000000005', isbn: '0-7475-5100-6', title: 'Harry Potter and the Order of the Phoenix', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '2003', price: '10.00'},
        {id: '00000000-0000-0000-0000-000000000006', isbn: '0-7475-8108-8', title: 'Harry Potter and the Half-Blood Prince', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '2005', price: '11.28'},
        {id: '00000000-0000-0000-0000-000000000007', isbn: '0-545-01022-5', title: 'Harry Potter and the Deathly Hallows', author_id: '00000000-0000-0000-0000-000000000001', genre: 'Fiction', publish_year: '2007', price: '11.88'},
        {id: '00000000-0000-0000-0000-000000000008', isbn: '0-553-10354-7', title: 'A Game of Thrones', author_id: '00000000-0000-0000-0000-000000000002', genre: 'Fantasy', publish_year: '1996', price: '20.00'},
        {id: '00000000-0000-0000-0000-000000000009', isbn: '0-553-10803-4', title: 'A Clash of Kings', author_id: '00000000-0000-0000-0000-000000000002', genre: 'Fantasy', publish_year: '1998', price: '12.98'},
        {id: '00000000-0000-0000-0000-00000000000a', isbn: '0-553-10663-5', title: 'A Storm of Swords', author_id: '00000000-0000-0000-0000-000000000002', genre: 'Fantasy', publish_year: '2000', price: '16.99'},
        {id: '00000000-0000-0000-0000-00000000000b', isbn: '0-553-80150-3', title: 'A Feast for Crows', author_id: '00000000-0000-0000-0000-000000000002', genre: 'Fantasy', publish_year: '2005', price: '14.87'},
        {id: '00000000-0000-0000-0000-00000000000c', isbn: '978-0553801477', title: 'A Dance with Dragons', author_id: '00000000-0000-0000-0000-000000000002', genre: 'Fantasy', publish_year: '2011', price: '15.12'},
        {id: '00000000-0000-0000-0000-00000000000d', isbn: '978-0451524935', title: '1984', author_id: '00000000-0000-0000-0000-000000000003', genre: 'Science Fiction', publish_year: '1949', price: '9.29'},
        {id: '00000000-0000-0000-0000-00000000000e', isbn: '978-0-553-10953-5', title: 'A Brief History of Time', author_id: '00000000-0000-0000-0000-000000000004', genre: 'Cosmology', publish_year: '1988', price: '11.45'},
        {id: '00000000-0000-0000-0000-00000000000f', isbn: '0-671-12805-1', title: 'Catch-22', author_id: '00000000-0000-0000-0000-000000000005', genre: 'Satire', publish_year: '1961', price: '8.50'},
        {id: '00000000-0000-0000-0000-000000000011', isbn: '978-0-7432-4722-1', title: 'Fahrenheit 451', author_id: '00000000-0000-0000-0000-000000000006', genre: 'Dystopian', publish_year: '1953', price: '10.49'},
        {id: '00000000-0000-0000-0000-000000000012', isbn: '0-7710-0813-9', title: 'The Handmaids Tail', author_id: '00000000-0000-0000-0000-000000000007', genre: 'Dystopian', publish_year: '1985', price: '11.10'},
        {id: '00000000-0000-0000-0000-000000000013', isbn: '978-0544003415', title: 'The Lord of the Rings', author_id: '00000000-0000-0000-0000-000000000008', genre: 'Fantasy', publish_year: '1954', price: '12.99'},
        {id: '00000000-0000-0000-0000-000000000014', isbn: '978-8087888155', title: 'The Sun Also Rises', author_id: '00000000-0000-0000-0000-000000000009', genre: 'Fiction', publish_year: '1926', price: '7.50'},
        {id: '00000000-0000-0000-0000-000000000015', isbn: '978-0743273565', title: 'The Great Gatsby', author_id: '00000000-0000-0000-0000-00000000000a', genre: 'Fiction', publish_year: '1925', price: '11.98'},
        {id: '00000000-0000-0000-0000-000000000016', isbn: '978-0446310789', title: 'To Kill a Mocking Bird', author_id: '00000000-0000-0000-0000-00000000000b', genre: 'Fiction', publish_year: '1960', price: '14.00'}
      ]);
    });
};
