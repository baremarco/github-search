import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function UserItem({ avatar_url, html_url, login, type }) {
    return (
        <Card style={{ width: "15rem" }} className="mb-3">
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
                <Card.Title>{`${type}: ${login}`}</Card.Title>
                <Card.Link
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {login}
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

UserItem.propTypes = {
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    login: PropTypes.string,
    type: PropTypes.string,
};

export default UserItem;
