import React /*{ useEffect, useState }*/ from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  
    const {data, loading}= useFecthGifs(category);

    
    



    


    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {loading&&<p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                
                {data.map((img) => {
                    return <GifGridItem key={img.id} {...img} />
                })}

            </div>
        </>
    )
}
