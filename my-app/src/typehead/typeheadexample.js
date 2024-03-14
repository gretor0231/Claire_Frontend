import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const TypeaheadExample = () => {
    const [options, setOptions] = useState([]);
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/states')
            .then(response => response.json())
            .then(data => {
                console.log('fetched data:',data)
                setOptions(data)
            })
            .catch(error => console.error('Error fetching states:', error));
    }, []);

    return (
        <>
            <Form.Group>
                <Form.Label>Single Selection</Form.Label>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder="Choose a state..."
                    selected={singleSelections}
                    maxResults={8}
                />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Multiple Selections</Form.Label>
                <Typeahead
                    id="basic-typeahead-multiple"
                    labelKey="name"
                    multiple
                    onChange={setMultiSelections}
                    options={options}
                    placeholder="Choose several states..."
                    selected={multiSelections}
                    maxResults={8}
                />
            </Form.Group>
        </>
    );
};

export default TypeaheadExample;
