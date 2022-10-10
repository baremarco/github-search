import React, { useCallback, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import reducer from "../utils/reducer";
import searchType, { urlType } from "../utils/constants";
import { types } from "../utils/reducer";
import { params } from "../config/axios";

const AppContext = React.createContext();

const initialState = {
    searchType: searchType.byUser,
    isLoading: false,
    query: "",
    page: 1,
    totalPages: 1,
    items: [],
    errorMsg: "",
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = urlType[state.searchType];

    useEffect(() => {
        const fetchData = async () => {
            if (state.query) {
                dispatch({ type: types.FETCH_DATA_REQUEST });

                try {
                    const response = await axios(url, {
                        params: {
                            q: state.query,
                            page: state.page,
                            per_page: params.itemsPerPage,
                        },
                    });

                    dispatch({
                        type: types.FETCH_DATA_SUCCESS,
                        payload: {
                            items: response.data.items,
                            totalPages: Math.min(
                                Math.ceil(
                                    params.maxItemsAPI / params.itemsPerPage
                                ),
                                Math.ceil(
                                    response.data.total_count /
                                        params.itemsPerPage
                                )
                            ),
                        },
                    });
                } catch (error) {
                    console.log(error.response);

                    dispatch({
                        type: types.FETCH_DATA_FAILURE,
                        payload: {
                            isLoading: false,
                            query: "",
                            page: 1,
                            totalPages: 1,
                            items: [],
                            errorMsg: error.response.data.message,
                        },
                    });
                }
            } else {
                dispatch({
                    type: types.FETCH_DATA_FAILURE,
                    payload: {
                        isLoading: false,
                        query: "",
                        page: 1,
                        totalPages: 1,
                        items: [],
                    },
                });
            }
        };

        fetchData();
    }, [state.query, state.page, url]);

    const setSearchByUser = useCallback(() => {
        dispatch({ type: types.SET_SEARCH_TYPE, payload: searchType.byUser });
    }, []);

    const setSearchByRepo = useCallback(() => {
        dispatch({ type: types.SET_SEARCH_TYPE, payload: searchType.byRepo });
    }, []);

    const handleSubmit = (query) => {
        dispatch({ type: types.UPDATE_QUERY, payload: query });
    };

    const nextPage = () => {
        let nextPage = state.page + 1;

        if (nextPage > state.totalPages) {
            nextPage = 1;
        }

        dispatch({ type: types.UPDATE_PAGE, payload: nextPage });
    };

    const prevPage = () => {
        let prevPage = state.page - 1;

        if (prevPage < 1) {
            prevPage = state.totalPages;
        }

        dispatch({ type: types.UPDATE_PAGE, payload: prevPage });
    };

    const handleError = () => {
        dispatch({
            type: types.FETCH_DATA_FAILURE,
            payload: {
                isLoading: false,
                query: "",
                page: 1,
                totalPages: 1,
                items: [],
                errorMsg: "",
            },
        });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                setSearchByUser,
                setSearchByRepo,
                handleSubmit,
                nextPage,
                prevPage,
                handleError,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node,
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
