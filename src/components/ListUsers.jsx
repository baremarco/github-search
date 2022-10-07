import React from "react";

import UserItem from "./UserItem";
import ListItems from "./ListItems";

function ListUsers() {
    const handleRender = (items) => {
        return items.map((item) => {
            return <UserItem key={item.id} {...item} />;
        });
    };

    return <ListItems onRender={handleRender} />;
}

export default ListUsers;
