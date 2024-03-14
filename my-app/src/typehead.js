const Typehead = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

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
                />
            </Form.Group>
        </>
    );
};