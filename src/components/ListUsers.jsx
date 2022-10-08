import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserItem from "./UserItem";
import ListItems from "./ListItems";

function ListUsers() {
    const handleRender = (items) => {
        return (
            <Row className=" justify-content-center my-5">
                {items.map((item) => {
                    return (
                        <Col key={item.id} xs="auto">
                            <UserItem {...item} />
                        </Col>
                    );
                })}
            </Row>
        );
    };

    return <ListItems onRender={handleRender} />;
}

export default ListUsers;
