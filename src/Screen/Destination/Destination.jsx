import React, { useEffect, useState } from 'react'
import './index.css';
import { API } from '../../vars.js'
import qs from 'qs';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Details from './Details.jsx';
import Card from '../../Components/Card.jsx';
import Loader from '../../Components/Loader';



const Destination = () => {

    const [blogs, setBlogs] = useState([]);
    const [meta, setMeta] = useState(undefined);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        fetchDestinations()
    }, [])


    const fetchDestinations = async () => {
        setLoading(true);
        const query = qs.stringify({
            populate: "*"
        })
        try {
            const { data } = await axios.get(API + `posts/?${query}`);
            setBlogs(data.data)
            setMeta(data.meta)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false);
    }



    if (loading) return <Loader />


    return (
        <div className="container">

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
