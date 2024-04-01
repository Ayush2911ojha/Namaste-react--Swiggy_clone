import React from 'react'
import { img_id } from './contants'

const DelFood = ({
  image,
  keyId,
  name,
  price,
  discount,
  area,
  cuisines,
  time,
  rating
}) => {
  // console.log(price, discount);
  return (
    <>
      {/* <div className='card-container-rest' key={keyId} data-price={`${price} ${discount}` &&  `${price }` && `${discount}`}> */}
      <div
        className='card-container-rest'
        key={keyId}
        data-price={`${price ? price : ''} ${' '} ${discount ? discount : ''}`}
      >
        <img
          className='res-img rest-card rest-card1 radial-black-effect'
          src={img_id + image}
          alt={name}
        />
        
        <div className='description nav-link small-des'>
          <h3>{cuisines && cuisines.slice(0, 2).join(' ')}</h3>
          <h3>{area}</h3>

          <div className='des-flex'>
            <h3>{rating}</h3>
            <h3>{time}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default DelFood
