import React from 'react';
import './index.css';
import Data from './Config';
import body from '../../../../src/Assets/Images/About/body.png'


const Descriptions = () => {
    return (
        <div className='description-container'>

            {Data.description_1.map(d => {
                return (
                    <div className='description-box' key={d.id}>
                        {d.text}
                    </div>
                );
            })}

            <img src={body} alt="Title" style={{ width: 400, height: 200, padding: '20px' }} />


            {Data.description_2.map(d => {
                return (
                    <div className='description-box' key={d.id}>
                        {d.text}
                    </div>
                );
            })}

        </div>
    )
}

export default Descriptions
