import React from "react";
import PropTypes from "prop-types";

import { useGlobalContext } from "../hooks/context";

function ListItems({ onRender }) {
    const { items } = useGlobalContext();

    if (items.length === 0) {
        return (
            <article>
                <span>No results found</span>
            </article>
        );
    }

    return onRender(items);
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onRender: PropTypes.func.isRequired,
};

export default ListItems;
