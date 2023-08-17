// src/components/Navbar.js
import React from 'react';
import {} from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
    </nav>
  );
};


export default navbar;
