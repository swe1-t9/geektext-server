
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {book_id: '1', isbn: '0-7475-3269-9', title: 'Harry Potter and the Sorcers Stone', author_id: '1', genre: 'Fiction', publish_year: '1997', price: '10.20'},
        {book_id: '2', isbn: '0-7475-3849-2', title: 'Harry Potter and the Chamber of Secrets', author_id: '1', genre: 'Fiction', publish_year: '1998', price: '11.00'},
        {book_id: '3', isbn: '0-7475-4215-5', title: 'Harry Potter and the Prisioner of Azkaban', author_id: '1', genre: 'Fiction', publish_year: '1999', price: '11.99'},
        {book_id: '4', isbn: '0-7475-4624-X', title: 'Harry Potter and the Goblet of Fire', author_id: '1', genre: 'Fiction', publish_year: '2000', price: '11.21'},
        {book_id: '5', isbn: '0-7475-5100-6', title: 'Harry Potter and the Order of the Phoenix', author_id: '1', genre: 'Fiction', publish_year: '2003', price: '10.00'},
        {book_id: '6', isbn: '0-7475-8108-8', title: 'Harry Potter and the Half-Blood Prince', author_id: '1', genre: 'Fiction', publish_year: '2005', price: '11.28'},
        {book_id: '7', isbn: '0-545-01022-5', title: 'Harry Potter and the Deathly Hallows', author_id: '1', genre: 'Fiction', publish_year: '2007', price: '11.88'},
        {book_id: '8', isbn: '0-553-10354-7', title: 'A Game of Thrones', author_id: '2', genre: 'Fantasy', publish_year: '1996', price: '20.00'},
        {book_id: '9', isbn: '0-553-10803-4', title: 'A Clash of Kings', author_id: '2', genre: 'Fantasy', publish_year: '1998', price: '12.98'},
        {book_id: '10', isbn: '0-553-10663-5', title: 'A Storm of Swords', author_id: '2', genre: 'Fantasy', publish_year: '2000', price: '16.99'},
        {book_id: '11', isbn: '0-553-80150-3', title: 'A Feast for Crows', author_id: '2', genre: 'Fantasy', publish_year: '2005', price: '14.87'},
        {book_id: '12', isbn: '978-0553801477', title: 'A Dance with Dragons', author_id: '2', genre: 'Fantasy', publish_year: '2011', price: '15.12'},
        {book_id: '13', isbn: '978-0451524935', title: '1984', author_id: '3', genre: 'Science Fiction', publish_year: '1949', price: '9.29'},
        {book_id: '14', isbn: '978-0-553-10953-5', title: 'A Brief History of Time', author_id: '4', genre: 'Cosmology', publish_year: '1988', price: '11.45'},
        {book_id: '15', isbn: '0-671-12805-1', title: 'Catch-22', author_id: '5', genre: 'Satire', publish_year: '1961', price: '8.50'},
        {book_id: '16', isbn: '978-0-7432-4722-1', title: 'Fahrenheit 451', author_id: '6', genre: 'Dystopian', publish_year: '1953', price: '10.49'},
        {book_id: '17', isbn: '0-7710-0813-9', title: 'The Handmaids Tail', author_id: '7', genre: 'Dystopian', publish_year: '1985', price: '11.10'},
        {book_id: '18', isbn: '978-0544003415', title: 'The Lord of the Rings', author_id: '8', genre: 'Fantasy', publish_year: '1954', price: '12.99'},
        {book_id: '19', isbn: '978-8087888155', title: 'The Sun Also Rises', author_id: '9', genre: 'Fiction', publish_year: '1926', price: '7.50'},
        {book_id: '20', isbn: '978-0743273565', title: 'The Great Gatsby', author_id: '10', genre: 'Fiction', publish_year: '1925', price: '11.98'},
        {book_id: '21', isbn: '978-0446310789', title: 'To Kill a Mocking Bird', author_id: '11', genre: 'Fiction', publish_year: '1960', price: '14.00'}
      ]);
    });
};
