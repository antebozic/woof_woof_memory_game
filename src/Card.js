import React from 'react';
import './Card.css'

const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundImage = `url(${props.backgroundImage})`
    }
    if (props.opacity) {
        style.filter = 'grayscale(100%)'
        style.border = '.18rem solid #000'
    } 
    return (
        <div 
            onClick={props.onClick}
            className="card-container" style={style} 
        >
        </div>
    )
};

export default Card;