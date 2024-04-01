import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantCollection = () => {

    const { collectionId } = useParams();
 
    async function fetchCollection() {
        
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&collection=${collectionId}&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);

        const data = await response.json();

        console.log("data",data);
    }

    useEffect(() => {
        collectionId ? fetchCollection() : " ";
    }, [collectionId]);

  return (
    <div>RestaurantCollection</div>
  )
}

export default RestaurantCollection