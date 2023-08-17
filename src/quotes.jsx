// src/pages/Quotes.js
import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
  .then(response => response.json())
  .then(json => console.log(json))
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
