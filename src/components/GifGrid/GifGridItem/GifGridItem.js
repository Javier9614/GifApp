import React from 'react';
import PropTypes from 'prop-types';
import "./GifGridItem.css";
const GifGridItem = ({title,url}) => {
    
    return(
        <div className="card animate__animated animate__rotateInUpRight">
            <h3 className="animate__animated animate__rotateInUpRight">{title}</h3>
            <div className="card__img"> 
                <img src={url} alt={title}/>
            </div>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default GifGridItem;