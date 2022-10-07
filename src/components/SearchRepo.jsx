import React, { useEffect } from "react";

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
        <>
            <section>
                <SearchForm placeholder="Search repository" />
            </section>
            <section>
                <PageLoading isLoading={isLoading}>
                    <PageButtons />
                    <ListRepos />
                </PageLoading>
            </section>
        </>
    );
}

export default SearchRepo;
