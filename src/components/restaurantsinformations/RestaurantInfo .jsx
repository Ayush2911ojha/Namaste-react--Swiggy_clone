import React from 'react'
import { img_id } from '../contants'
import { ITEM_IMG_CDN_URL} from '../contants'
import { AiOutlineDollarCircle, AiFillDollarCircle } from 'react-icons/ai'
import { FaRupeeSign } from 'react-icons/fa'
import { BiAdjust } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

const RestaurantInfo = ({ Restaurantinfo }) => {
   console.log(Restaurantinfo)
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    lastMileTravelString,
    feeDetails,
    expectationNotifiers,
    totalRatingsString,
    sla,
    costForTwoMessage
  } = Restaurantinfo
  return (
    <>
      <div className='border-b max-sm:flex-col  p-3 border-gray-400 border-dashed w-full mt-20  flex justify-between'>
        <div>
          <h2 className='font-bold text-xl pb-2'>{name}</h2>
          <div className='flex text-[0.8rem] gap-[3px] flex-col'>
            <p className=' gap-1 text-gray-400'>{cuisines?.join(',')}</p>
            <p className='text-gray-400'>{areaName} </p>
          </div>
          <div className='flex items-center gap-2 mt-4 '>
            {/* <img className='w-[2rem] p-2' src={expectationNotifiers && expectationNotifiers.length != 0 ? (expectationNotifiers[0]?.icon?.imageId || "") : ""} alt="" /> */}
            <img
              className='w-[1.1rem]  aspect-auto' 
              src={ITEM_IMG_CDN_URL + 'v1648208530/surgecreatives/info'}
              alt=''
            />
            <p className='text-gray-400'>{feeDetails.message}</p>
          </div>
        </div>
        <div className='gap-3 max-sm:h-20 '>
          <div className=' gap-2 p-1 items-center mb-3  max-sm:items-start sm:border-[1.5px] rounded-md flex flex-col '>
            <ul className='flex gap-1 items-center border-b  font-bold text-green-700 border-gray-400 '>
              <li>
                <FaStar className='text-green-700' size={15} />
              </li>
              <li className=''>{avgRating} </li>
            </ul>

            <p className='text-[0.6rem] font-semiboldbold  text-gray-500 justify-center items-center mt-3'>
              {totalRatingsString}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full text-[1rem]  flex justify-between '>
        <ul className=' items-center flex mt-[0.7rem] gap-3 font-[900]  text-blue-950  '>
         
            <li>
              <BiAdjust size={20} />
          </li>
          <li>{sla?.slaString}</li>
            
          
          <li className='flex gap-3 items-center '>
            <FaRupeeSign className='rounded-full   p-[1px] border-2 border-blue-950 ' />
            {costForTwoMessage}
          </li>
        </ul>
      </div>
    </>
  )
}

export default RestaurantInfo
