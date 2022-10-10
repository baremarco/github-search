import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";

function PageLoading({ children, isLoading }) {
    return (
        <Col
            className={`${
                isLoading && "d-flex justify-content-center align-items-center"
            }`}
            style={{ height: isLoading ? "50vh" : "auto" }}
        >
            {isLoading ? (
                <Spinner variant="primary" animation="border" role="status" />
            ) : (
                children
            )}
        </Col>
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
