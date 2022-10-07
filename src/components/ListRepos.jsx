import React from "react";

import ListItems from "./ListItems";
import RepoItem from "./RepoItem";

function ListRepos() {
    const handleRender = (items) => {
        return items.map((item) => {
            return <RepoItem {...item} />;
        });
    };

    return <ListItems onRender={handleRender} />;
}

export default ListRepos;
