import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Card = (props) => {

    const { currPost } = props

    let image = currPost.attributes.cover.data.attributes.url
    // console.log(currPost)

    return (
        <div className="latestCard">
            <img className='destimage' src={`http://localhost:1337${image}`} alt="logo" />

            <div className="card1">
                <NavLink to={`/destinations/${currPost.id}`} > {currPost.attributes.title}</NavLink>
                <br />
                {currPost.attributes.publishedAt.slice(0, 10)}
                <br />
                <br />
                {currPost.attributes.excerpt}
            </div>
        </div>
    )
}

export default Card
