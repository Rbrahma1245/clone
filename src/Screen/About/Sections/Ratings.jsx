import React from 'react'
import './index.css';
import star from '../../../../src/Assets/Images/About/star.png'
import plane from '../../../../src/Assets/Images/About/plane.png'
import microphone from '../../../../src/Assets/Images/About/microphone.png'


const Ratings = () => {
    return (
        <div className='rating-box'>

            <div className='rating-box1'>
                <h1>4.9</h1>
                <p>App Store Rating</p>
                <img src={star} alt="Star" style={{ width: 170 }} />
            </div>
            <div className='rating-box2'>
                <h1>67</h1>
                <p>Countries we visited</p>
                <img src={plane} alt="Plane" style={{ width: 50 }} />
            </div>
            <div className='rating-box3'>
                <h1>500+</h1>
                <p>Hours interviewing locals</p>
                <img src={microphone} alt="Microphone" style={{ width: 40 }} />
            </div>

        </div>
    )
}

export default Ratings
