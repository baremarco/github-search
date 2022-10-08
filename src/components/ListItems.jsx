import React from "react";
import PropTypes from "prop-types";

import { useGlobalContext } from "../hooks/context";
import InfoMsg from "./InfoMsg";

function ListItems({ onRender }) {
    const { items, query, errorMsg, handleError } = useGlobalContext();

    if (query && items.length === 0) {
        return <InfoMsg variant="warning">No results found</InfoMsg>;
    }

    if (errorMsg) {
        return (
            <InfoMsg variant="danger" heading onClose={handleError}>
                {errorMsg}
            </InfoMsg>
        );
    }

    return onRender(items);
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onRender: PropTypes.func.isRequired,
};

export default ListItems;
