import React, { useState } from 'react';
import './App.css';
import TypeHead from "./typehead";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h3>Typeahead Example</h3>
            </header>
            <main>
                <TypeHead /> {/* Render the BasicExample component */}
            </main>
        </div>
    );

}

export default App;
