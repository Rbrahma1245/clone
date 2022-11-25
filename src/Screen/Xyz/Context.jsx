// 1)  context creation
// 2)  provider
// 3)  consumer lengthy, remove and replace with
// 3)  useContext hook


import React, { useContext, useReducer, useEffect } from "react";
import Reducer from '../Xyz/Reducer'
import axios from 'axios'
import qs from 'qs';
// let API = "http://hn.algolia.com/api/v1/search?";

import { API } from '../../vars.js'

const initialState = {


    search: "",
    nbpages: 0,
    page: 0,
    hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch,] = useReducer(Reducer, initialState);


    const fetchApiData = async () => {
        const query = qs.stringify({
            populate: "*"
        })


        try {
            const { data } = await axios.get(API + `posts/?${query} `)
            // console.log(data.data)
        }


        catch (error) {
            console.log(error)
        }

    }





    //to Search 

    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })

    }

    // console.log(state.hits)

    useEffect(() => {
        fetchApiData(state.search);
    }, [state.search])








    return (
        <AppContext.Provider value={{ ...state, searchPost }}>
            {children}
        </AppContext.Provider>
    )
}




//creating custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
}




export { AppContext, AppProvider, useGlobalContext }