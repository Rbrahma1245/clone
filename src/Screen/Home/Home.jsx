import React from 'react'
// import Destination from '../Destination/Destination'
import { NavLink } from 'react-router-dom';
import videourl from '../../Assets/Videos/HeaderVideo.mp4';
import NewForm from '../../Forms/NewForm';
// import Search from '../Xyz/Search';
// import Stories from '../Xyz/Stories';


const Home = () => {
    let text = "Shop destiantaion guides"
    return (
        <div className='main-container'>
            <video width={'100%'} height="400" src={videourl} muted autoPlay loop />

            <div >
                {text}
                <NavLink to="/destinations">  See all</NavLink>
                {/* <Destination /> */}
                {/* <Search />
                <Stories /> */}

                <NewForm />
            </div>


        </div>
    )
}

export default Home
