import React from 'react'
import { img_id } from './contants'

const RestaurantsCards = ({image, keyId,name  }) => {
  // console.log(props.menucard);
  return (
   
      
      <div className='card-container' key={keyId}>
        <img className='res-img '
          src={img_id + image}
          alt={name}/>
        {/* <h3 className='description'> {name}</h3> */}
      </div>
   
  )
}

export default RestaurantsCards
