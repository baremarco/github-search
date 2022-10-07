import React from "react";
import PropTypes from "prop-types";

import UserItem from "./UserItem";

function RepoItem({
    id,
    owner,
    name,
    full_name,
    private: isPrivate,
    html_url,
    description,
}) {
    return (
        <section key={id}>
            <UserItem {...owner} />
            <article>
                <h4>{name}</h4>
                <p>{full_name}</p>
                <p>
                    {isPrivate ? "It's a private Repo" : "It's a public Repo"}
                </p>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {description}
                </a>
            </article>
        </section>
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
