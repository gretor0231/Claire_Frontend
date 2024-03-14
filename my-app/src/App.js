import React, { useState } from 'react';
import './App.css';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  // Add more countries here...
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matchingCountries = countries.filter(country =>
        country.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(matchingCountries);
  };

  const handleSelect = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
  };

  return (
      <div className="container">
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="search-input"
        />
        <ul className="suggestions">
          {suggestions.map((country, index) => (
              <li key={index} onClick={() => handleSelect(country)}>{country}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
