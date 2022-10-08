import React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

function Footer({ children }) {
    return (
        <footer className="fixed-bottom py-2 mt-3 bg-dark">
            <Container className="px-4">
                <p className="text-center text-white">{children}</p>
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    children: PropTypes.node,
};

export default Footer;
