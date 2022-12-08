import React, { useState, useEffect } from 'react'
import { API } from '../../vars.js'
import axios from 'axios';
import qs from 'qs';
import Card from '../../Components/Card.jsx';


const Search = () => {


    const [blogs, setBlogs] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    useEffect(() => {
        fetchsearchResult()
    }, [])


    const fetchsearchResult = async () => {
        const query = qs.stringify({
            populate: "*"
        })
        try {
            const { data } = await axios.get(API + `posts/?${query}`);
            setBlogs(data.data)
        } catch (error) {
            console.log(error)
        }
    }


    const filteredData = blogs.filter((currElem) => {
        if (searchInput === '') {
            return currElem;
        } else {
            return currElem.attributes.title.toLowerCase().includes(searchInput)
        }
    })

    console.log(filteredData)


    return (
        <div className='container'>
            This is Search Bar
            <br />

            <input type="text" placeholder='Search Here' value={searchInput} onChange={(e) => setSearchInput(e.target.value.toLowerCase())} />


            {filteredData.map((currElem) => {
                // <li key={currElem.id}>{currElem.attributes.title}</li>


                return (
                    <div className="box" key={currElem.id}>
                        <Card currPost={currElem} />
                    </div>
                )
            })
            }


        </div >
    )
}

export default Search
