import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { useGlobalContext } from "../hooks/context";

function SearchForm({ placeholder }) {
    const [query, setQuery] = useState("");
    const { handleSubmit, isLoading } = useGlobalContext();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Form className="d-flex mt-5" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
                type="search"
                placeholder={placeholder}
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
            />
            <Button
                type="submit"
                onClick={() => handleSubmit(query)}
                variant="outline-success"
                disabled={isLoading}
            >
                {isLoading && (
                    <Spinner
                        as="span"
                        animation="border"
                        variant="success"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                )}

                {isLoading ? "Searching..." : "Search"}
            </Button>
        </Form>
    );
}

SearchForm.propTypes = {
    placeholder: PropTypes.string,
};

SearchForm.defaultProps = {
    placeholder: "",
};

export default SearchForm;
