import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InfoMsg({ variant, children, onClose, heading }) {
    const [show, setShow] = useState(!!children);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        setShow(false);
    };
    if (show) {
        return (
            <Row className="mt-3">
                <Col>
                    <Alert
                        key={variant}
                        variant={variant}
                        onClose={handleClose}
                        dismissible
                    >
                        {heading && (
                            <Alert.Heading>
                                Oh snap! You got an error!
                            </Alert.Heading>
                        )}
                        {children}
                    </Alert>
                </Col>
            </Row>
        );
    }
}

InfoMsg.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.string,
    onClose: PropTypes.func,
    heading: PropTypes.bool,
};

InfoMsg.defaultProps = {
    children: "",
    onClose: undefined,
    heading: false,
};

export default InfoMsg;
