import React from "react";
import PropTypes from "prop-types";

function UserItem({ avatar_url, html_url, login }) {
    return (
        <article>
            <img src={avatar_url} alt="avatar" />
            <a href={html_url} target="_blank" rel="noopener noreferrer">
                {login}
            </a>
        </article>
    );
}

UserItem.propTypes = {
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    login: PropTypes.string,
};

export default UserItem;
