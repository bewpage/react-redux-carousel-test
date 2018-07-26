import React from 'react';

const Arrow = ({image, arrowStyle, next}) => {
    const imageSrc = `../img/${image}`;

    return (
        <div
            className={arrowStyle}
            onClick={next}
        >
            <img src={imageSrc} alt={image}/>
        </div>
    )
};

export default Arrow;