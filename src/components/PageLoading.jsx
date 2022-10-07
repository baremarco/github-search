import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";

function PageLoading({ children, isLoading }) {
    return (
        <>
            {isLoading ? (
                <Spinner animation="border" role="status" />
            ) : (
                children
            )}
        </>
    );
}

PageLoading.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
};

PageLoading.defaultProps = {
    isLoading: false,
};

export default PageLoading;
