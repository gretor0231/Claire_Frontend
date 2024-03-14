import React, { useState } from 'react';
import './App.css';
import TypeHead from "./typehead/typehead";
import Typeheadexample from "./typehead/typeheadexample";

function App() {


    return (
        <div className="App">
            <main>
                <Typeheadexample /> {/* Render the BasicExample component */}
            </main>
        </div>
    );



}

export default App;
