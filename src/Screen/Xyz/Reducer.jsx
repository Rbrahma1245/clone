const reducer = (state, action) => {

    switch (action.type) {


        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                // nbPages: action.payload.nbPages
            }


        case "SEARCH_QUERY":
            return {
                ...state,
                search: action.payload
            }



    }
    return state
}


export default reducer;