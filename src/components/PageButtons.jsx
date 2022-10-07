import React from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../hooks/context";

function PageButtons() {
    const { isLoading, totalPages, nextPage, prevPage, page } =
        useGlobalContext();
    return (
        <div>
            <button disabled={isLoading} onClick={() => prevPage()}>
                prev
            </button>
            <p>
                {page} of {totalPages}
            </p>
            <button disabled={isLoading} onClick={() => nextPage()}>
                next
            </button>
        </div>
    );
}

PageButtons.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    totalPages: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
};

export default PageButtons;
