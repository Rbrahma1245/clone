import React, { useState, useEffect } from 'react';
import './index.css';
import { Link, NavLink, useParams } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import { API } from '../../vars'
import Loader from '../../Components/Loader';



const Details = () => {
    const params = useParams();
    const [blogs, setBlogs] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const blogId = params.blogId;


    useEffect(() => {
        fetchDetails()
    }, [])


    const fetchDetails = async () => {
        setLoading(true);
        const query = qs.stringify({
            populate: "*",
        })

        try {
            const { data } = await axios.get(API + `posts/${blogId}?${query}`);
            setBlogs(data.data);
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false);
    }


    if (loading) return <Loader />



    if (blogs === undefined) {
        return (
            <div>Invalid</div>
        )
    }

    let image = blogs.attributes.cover.data.attributes.url
    return (

        <div className="blockDetails">
            <div className="box" key={blogs.id}>
                <div className="latestCard">
                    <NavLink to="/destinations" > Back</NavLink>

                    <div className="card1">
                        <img className='imgdetails' src={`http://localhost:1337${image}`} alt="logo" />
                        <h3>{blogs.attributes.title}</h3>
                        {blogs.attributes.createdAt.slice(0, 10)}
                        <br />
                        <br />
                        {blogs.attributes.content}
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Details
