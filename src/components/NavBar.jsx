import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search-user">Search by User</Link>
                </li>
                <li>
                    <Link to="/search-repo">Search by Repo</Link>
                </li>
            </ul>
        </nav>
    );
}

NavBar.propTypes = {};

export default NavBar;
