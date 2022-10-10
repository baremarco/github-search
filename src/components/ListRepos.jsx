import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListItems from "./ListItems";
import RepoItem from "./RepoItem";

function ListRepos() {
    const handleRender = (items) => {
        return (
            <Row className=" justify-content-center my-5">
                {items.map((item) => {
                    return (
                        <Col key={item.id} xs="auto">
                            <RepoItem {...item} />
                        </Col>
                    );
                })}
            </Row>
        );
    };

    return <ListItems onRender={handleRender} />;
}

export default ListRepos;
