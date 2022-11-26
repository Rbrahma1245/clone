import React from 'react';
import './index.css';
import { Link, NavLink } from 'react-router-dom';

const TravelPlaces = (props) => {
    const { currPost } = props

    let image = currPost.attributes.cover.data.attributes.url
    // console.log(currPost)

    return (
        <div className="new">
            <img className='destimage' src={`http://localhost:1337${image}`} alt="logo" />


            <div className="new1">
                <NavLink className="new1" to={`/destinations/${currPost.id}`} > {currPost.attributes.title}</NavLink>


            </div>
        </div>
    )
}

export default TravelPlaces
