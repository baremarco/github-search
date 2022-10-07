import React, { useEffect } from "react";

import { useGlobalContext } from "../hooks/context";

function SearchRepo(props) {
    const { setSearchByRepo } = useGlobalContext();

    useEffect(() => {
        setSearchByRepo();
    }, [setSearchByRepo]);

    return (
        <div>
            <h2>SearchRepo</h2>
        </div>
    );
}

SearchRepo.propTypes = {};

export default SearchRepo;
