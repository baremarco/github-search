import React, { useState } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../hooks/context";

function SearchForm({ placeholder }) {
    const [query, setQuery] = useState("");
    const { handleSubmit, isLoading } = useGlobalContext();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                <button type="submit" onClick={() => handleSubmit(query)}>
                    {isLoading ? "Searching..." : "Search"}
                </button>
            </form>
        </section>
    );
}

SearchForm.propTypes = {
    placeholder: PropTypes.string,
};

SearchForm.defaultProps = {
    placeholder: "",
};

export default SearchForm;
