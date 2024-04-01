import React from 'react'
import { img_id } from '../contants'
import { ITEM_IMG_CDN_URL } from '../contants'
import { FaPlus, FaRupeeSign, FaStar } from 'react-icons/fa'

const CartFoodItems = ({ imageId, name,description,price,defaultPrice }) => {
    // console.log("cart", )
  return (
     
      <div className=' flex justify-between w-[200px], rounded-lg p-3 m-3 bg-green-50'>
          
         

          <ul className='w-[60%]' >
              <li className='text-xl font-bold'>{name}</li> 
              <li className='text-gray-500 font-light text-sm '>{description}</li> 
              <div className='flex  items-center'>
                   <FaRupeeSign size={12}/>                  
              <li>{price? price/100 : defaultPrice/100 }</li>
              </div>
             
          </ul>
          <div className='p-2  flex justify-end items-center '>
              <img className=' w-[30%] rounded-xl' src={ img_id + imageId } alt="cartFood" />
          </div>
          
      </div>
      
  )
}

export default CartFoodItems