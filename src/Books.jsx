// src/pages/Books.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
  .then(response => response.json())
  .then(json => {setBook(json.results)})
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {book.map((books) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <img src={book.coverImage} alt={book.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
