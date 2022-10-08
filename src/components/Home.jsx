import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="h-100 p-5 mt-3 bg-light border rounded-3 text-center">
                        <h2>Welcome to Github search app</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
