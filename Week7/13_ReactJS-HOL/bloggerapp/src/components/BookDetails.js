import React from 'react';

const books = [
  { id: 1, title: 'React for Beginners', author: 'John Doe' },
  { id: 2, title: 'Advanced JavaScript', author: 'Jane Smith' },
];

const BookDetails = () => {
  return (
    <div>
      <h2>📖 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
