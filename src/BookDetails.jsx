// src/pages/BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/books/1')
  .then(response => response.status ===  200? response.json() : navigate('/'))
  .then(json => {setBook(
    {
      name: json.name,
      id: json.id,
      image: json.sprites.other  ['official-artwork'].front_default, abilities: json.abilities
    }
  )} )
  }, []
  )

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;