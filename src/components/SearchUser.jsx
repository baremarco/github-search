import React, { useEffect } from "react";

import SearchForm from "./SearchForm";
import PageLoading from "./PageLoading";
import { useGlobalContext } from "../hooks/context";
import PageButtons from "./PageButtons";
import ListUsers from "./ListUsers";

function SearchUser() {
    const { setSearchByUser, isLoading } = useGlobalContext();

    useEffect(() => {
        setSearchByUser();
    }, [setSearchByUser]);

    return (
        <>
            <section>
                <SearchForm placeholder="Search user" />
            </section>
            <section>
                <PageLoading isLoading={isLoading}>
                    <PageButtons />
                    <ListUsers />
                </PageLoading>
            </section>
        </>
    );
}

export default SearchUser;
