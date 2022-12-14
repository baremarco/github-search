import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useGlobalContext } from "../hooks/context";

function PageButtons() {
    const { isLoading, totalPages, nextPage, prevPage, page } =
        useGlobalContext();

    if (totalPages <= 1) {
        return <></>;
    }
    return (
        <Row className="justify-content-center mt-3">
            <Col xs="auto">
                <Button
                    variant="outline-primary"
                    disabled={isLoading}
                    onClick={() => prevPage()}
                >
                    prev
                </Button>
            </Col>
            <Col xs="auto">
                {page} of {totalPages}
            </Col>
            <Col xs="auto">
                <Button
                    variant="outline-primary"
                    disabled={isLoading}
                    onClick={() => nextPage()}
                >
                    next
                </Button>
            </Col>
        </Row>
    );
}

PageButtons.propTypes = {
    isLoading: PropTypes.bool,
    totalPages: PropTypes.number,
    nextPage: PropTypes.func,
    prevPage: PropTypes.func,
    page: PropTypes.number,
};

export default PageButtons;
