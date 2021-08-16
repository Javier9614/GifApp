import React from 'react';
import GifGridItem from './GifGridItem/GifGridItem';
import {useFetchGifs} from '../../hooks/useFetchGifs';
import PropTypes from "prop-types";

import "./GifGrid.css";


const GifGrid = ({category}) => {


//aqui estamos cambiando el campo data a images para que se entienda mejor el codigo
const {data:images, loading} = useFetchGifs(category);

    return(

        <>
        <h4 className="animate__animated animate__fadeInDown">{category}</h4>

        {loading && <p className="animate__animated animate__flash">Loading</p> }
        
        <div className="card-grid">
            
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id}
                        //aqui destructuramos img para mandarle al hijo 
                        //data,url y title
                        {...img }/>
                    ))
                }
        </div>
        </>
            )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired,
}

export default GifGrid;