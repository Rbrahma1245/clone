import React, { useEffect, useState } from 'react'
import './index.css';
import { API } from '../../vars.js'
import qs from 'qs';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Details from './Details.jsx';
import Card from '../../Components/Card.jsx';


const Destination = () => {

    const [blogs, setBlogs] = useState([]);
    const [meta, setMeta] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [searchApiData, setSearchApiData] = useState([])
    const [search, setSearch] = useState('')




    useEffect(() => {
        fetchDestinations()
    }, [])


    const fetchDestinations = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*"
        })
        try {
            const { data } = await axios.get(API + `posts/?${query}`);
            setBlogs(data.data)
            setSearchApiData(data.data)
            setMeta(data.meta)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }

    const handleFilter = (e) => {
        setSearch(e.target.value)
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }


    return (
        <div className="container">
            <input type="text" placeholder='Search Here' onChange={() => handleFilter} />
            {
                blogs.map((currPost) => {
                    return (

                        <div className="box" key={currPost.id}>
                            <Card currPost={currPost} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Destination
