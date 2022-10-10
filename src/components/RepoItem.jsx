import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function RepoItem({
    owner,
    name,
    full_name,
    private: isPrivate,
    html_url,
    description,
}) {
    return (
        <Card style={{ width: "15rem" }} className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {full_name}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{`Created by ${owner?.type}: ${owner?.login}`}</Card.Subtitle>
                <Card.Text>
                    {`${
                        isPrivate ? "It's a private Repo" : "It's a public Repo"
                    }, ${description}`}
                </Card.Text>
                <div className="d-flex flex-column ">
                    <Card.Link
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to repository
                    </Card.Link>
                    <Card.Link
                        href={owner?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-0"
                    >
                        Go to user
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

RepoItem.propTypes = {
    id: PropTypes.number,
    owner: PropTypes.shape({}),
    name: PropTypes.string,
    full_name: PropTypes.string,
    isPrivate: PropTypes.bool,
    html_url: PropTypes.string,
    description: PropTypes.string,
};

export default RepoItem;
