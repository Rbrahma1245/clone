import React from 'react';
import './index.css';
import title from '../../../../src/Assets/Images/About/title.png'




const Title = () => {
    return (
        <div className='title-container'>
            <img src={title} alt="Title" style={{ width: 760, height: 260 }} />
        </div>
    )
}

export default Title
