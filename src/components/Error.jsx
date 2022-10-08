import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Error() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="h-100 p-5 bg-warning border rounded-3 text-center">
                        <h2>You are trying to reach an undefined route</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Error;
