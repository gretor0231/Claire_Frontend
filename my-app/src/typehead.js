import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const TypeHead = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

    // Sample options array (replace it with your actual data)

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

export default TypeHead;
