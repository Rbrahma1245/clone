import React, { useEffect, useState } from 'react'
import { API } from '../../vars.js'
import './index.css';
import qs from 'qs';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import videourl from '../../Assets/Videos/HeaderVideo.mp4';

import TravelPlaces from '../../Components/TravelPlaces.jsx';
import MidHome from './MidHome.jsx';


const Home = () => {


    const [blogs, setBlogs] = useState([]);
    const [meta, setMeta] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [searchApiData, setSearchApiData] = useState([])



    let text = "Travelling places to visit"

    useEffect(() => {
        fetchDestinations()
    }, [])


    const fetchDestinations = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*",
            pagination: {
                page: 4,
                pageSize: 4
            }
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



    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }


    return (
        <div className='main-container'>
            <video className="vid" width={'100%'} src={videourl} muted autoPlay loop />

            <div className='destination-container'>
                <h3>{text} <NavLink to="/destinations">  See all</NavLink></h3>
                <div className='new-container'>
                    {
                        blogs.map((currPost) => {
                            return (
                                <div className="box1" key={currPost.id}>
                                    <TravelPlaces currPost={currPost} />
                                </div>
                            )
                        })
                    }
                </div>

                <MidHome />
            </div>


        </div>
    )
}

export default Home
