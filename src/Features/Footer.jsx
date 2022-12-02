import React from 'react';
import './index.css';
import applestore from '../Assets/Images/applestore.png';
import androidstore from '../Assets/Images/androidstore.png';


const Footer = () => {

    const details =
        'Mamakoo is a digital food guide for curious travelers. For each destination, we introduce unique food & restaurant recommendations from local insiders. Our team is based in New York City where we are spoiled with diverse, world-class eateries and watering holes.';

    return (
        <div className='footer'>

            <div className='details'>
                {details}
            </div>
            <div className='details1'>
                <p>ABOUT US</p>
                <p>DESTINATIONS</p>
                <p> TERMS OF SERVICS</p>
                <p>PRIVACY POLICY</p>
            </div>

            <div className='details2'>
                <img src={applestore} alt="Logo" style={{ width: 130 }} />
                <br />
                <br />
                <img src={androidstore} alt="Logo" style={{ width: 130 }} />
            </div>

        </div >
    )
}

export default Footer
