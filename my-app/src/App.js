import React, { useState } from 'react';
import './App.css';

const countries = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
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
