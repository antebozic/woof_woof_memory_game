import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundImage = `url(${props.backgroundImage})`
    }
    if (props.opacity) {
        style.filter = 'grayscale(100%)'
        style.border = '.18rem solid #000'
        // style.opacity = '.8'
    } 
    return (
        <div 
            onClick={props.onClick}
            className="card-container" style={style} 
        >
        </div>
    )
};

Card.propTypes = {
    showing: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Card;