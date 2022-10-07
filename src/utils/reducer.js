export const types = {
    SET_SEARCH_TYPE: "github-search/SET_SEARCH_TYPE",
    HANDLE_SEARCH: "github-search/HANDLE_SEARCH",
    UPDATE_QUERY: "github-search/UPDATE_QUERY",
    FETCH_DATA_REQUEST: "github-search/FETCH_DATA_REQUEST",
    FETCH_DATA_SUCCESS: "github-search/FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILURE: "github-search/FETCH_DATA_FAILURE",
    UPDATE_PAGE: "github-search/UPDATE_PAGE",
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_SEARCH_TYPE:
            return {
                ...state,
                isLoading: false,
                query: "",
                page: 1,
                totalPages: 1,
                items: [],
                searchType: action.payload,
            };
        case types.UPDATE_QUERY:
            return {
                ...state,
                query: action.payload,
                page: 1,
            };
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.items,
                totalPages: action.payload.totalPages,
            };
        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                ...action.payload,
            };
        case types.UPDATE_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            throw new Error(`no mathching "${action.type}" action type`);
    }
};

export default reducer;
