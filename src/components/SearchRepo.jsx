import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import SearchForm from "./SearchForm";
import PageLoading from "./PageLoading";
import PageButtons from "./PageButtons";
import { useGlobalContext } from "../hooks/context";
import ListRepos from "./ListRepos";

function SearchRepo() {
    const { setSearchByRepo, isLoading } = useGlobalContext();

    useEffect(() => {
        setSearchByRepo();
    }, [setSearchByRepo]);

    return (
        <Container>
            <Row>
                <Col>
                    <SearchForm placeholder="Search repository" />
                </Col>
            </Row>
            <Row>
                <PageLoading isLoading={isLoading}>
                    <PageButtons />
                    <ListRepos />
                </PageLoading>
            </Row>
        </Container>
    );
}

export default SearchRepo;
