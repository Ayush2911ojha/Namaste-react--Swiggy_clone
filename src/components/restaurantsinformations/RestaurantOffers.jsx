import React from 'react'
import { img_id } from '../contants'

const RestaurantOffers = ({ Restaurantoffers }) => {
  // console.log("restaurant offer",Restaurantoffers)

  return (
    <div className='flex justify-start max-md:flex-wrap  p-3 gap-3 '>
      {Restaurantoffers?.slice(0, 4)?.map((el, index) => (
        <div key={index} className=' text-gray-500 text-[0.8rem]'>
          <ul className=' border-2 p-2   rounded-md '>
            <div className='flex items-center justify-center gap-2 font-bold'>
              <img
                className='w-[1.2rem]'
                src={ el?.info?.offerLogo !== undefined? img_id + el?.info?.offerLogo: ''}
                alt='offersLogo'
              />

              <li>
                <p>{el?.info?.header}</p>
              </li>
            </div>

            <li className='flex items-center justify-center gap-2 text-[0.6rem]'>
              <p>{el?.info?.description}</p>
              <p>{el?.info?.couponCode}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default RestaurantOffers
