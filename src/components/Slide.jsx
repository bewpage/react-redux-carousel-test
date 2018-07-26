import React from 'react';

const Slide = ({ image, testRef }) => {

    const slideStyle = {
        backgroundImage: `url(img/${image}.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
    };
    return(
        <div
            className='slide-img'
            style={slideStyle}
            ref={testRef}
        ></div>
    )
};

export default Slide;