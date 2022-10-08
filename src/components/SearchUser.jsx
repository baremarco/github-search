import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchForm from "./SearchForm";
import PageLoading from "./PageLoading";
import PageButtons from "./PageButtons";
import ListUsers from "./ListUsers";
import { useGlobalContext } from "../hooks/context";

function SearchUser() {
    const { setSearchByUser, isLoading } = useGlobalContext();

    useEffect(() => {
        setSearchByUser();
    }, [setSearchByUser]);

    return (
        <Container>
            <Row>
                <Col>
                    <SearchForm placeholder="Search user" />
                </Col>
            </Row>
            <Row>
                <PageLoading isLoading={isLoading}>
                    <PageButtons />
                    <ListUsers />
                </PageLoading>
            </Row>
        </Container>
    );
}

export default SearchUser;
