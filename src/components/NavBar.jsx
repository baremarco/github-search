import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar(props) {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        GitHub Search
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/search-user">
                            Search by User
                        </Nav.Link>
                        <Nav.Link as={Link} to="/search-repo">
                            Search by Repo
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;
