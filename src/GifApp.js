import React, { useState } from "react";
import { AddCategories, GifGrid } from './components';


const GifApp = ({defaultCategories = []}) => {
    const [categories, setCategories]=useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([...categories,"HunterXHunter"]);
    // }

    return(
        <>
            <h2>GifApp</h2>
            <AddCategories setCategories={ setCategories }/>
            <hr />
            
            <ul>
                {
                categories.map(category => {
                    return <GifGrid 
                    key={category}
                    category={category}
                    />;        
                })
                }
            </ul>
        </>
    )
}

export default GifApp;