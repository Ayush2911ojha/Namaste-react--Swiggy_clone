import React, { useState ,useEffect} from 'react'
import { img_id } from '../contants'
import { FaPlus, FaRupeeSign, FaStar } from 'react-icons/fa'
import vegIcon from '../images/veg.png'
import NonVegIcon from '../images/NonVeg.png'
import { GoChevronDown , GoChevronUp} from "react-icons/go";
import menu from '../menuApi'
import { addItem } from '../../utils/CartSlice'

import { useDispatch } from 'react-redux'



const VegFood = ({ vegetarianItems, title }) => {
  const [Hide, setHide] = useState(false);

  const dispatch = useDispatch()
  function handleCart(item) {
    // console.log("Cart Item ", item);
    dispatch(addItem(item))
   }
  function hide() {
    setHide(prev => !prev);
  }

  return (
    < div className="mt-8 border-b-[14px] pb-5 border-gray-100">
     
   <div className='flex justify-between'>
      <h1 className='forSearch font-bold text-[1.3rem]'>{title}({vegetarianItems?.length})</h1>
      
        {Hide?<GoChevronDown onClick={hide} size={25} />:<GoChevronUp onClick={hide} size={25} />}
        </div>
        <div className={`${Hide ? 'hidden' : 'block'} `}>
       
      {vegetarianItems?.slice(0, vegetarianItems?.length)?.map?.((el, index) => (
        <div key={index}>
          <div className="flex justify-between w-full border-b-2  pt-6 pb-8">
            <ul className='flex flex-col gap-[0.2rem] text-[0.9rem] w-[80%]'>
           
              <li className='flex items-center gap-1 '>
                <img className='w-[1rem]' src={el?.card?.info?.isVeg == 1 ? vegIcon : NonVegIcon} alt="VegIcon" />
               
                <p className='text-yellow-600 flex items-center gap-[2px] font-bold text-[0.8rem]'>
    {el?.card?.info?.isBestseller && (
      <>
        <FaStar className='text-yellow-500' />
        {el?.card?.info?.ribbon?.text}
      </>
    )}
  </p>
  <p className='text-yellow-600 font-bold text-[0.8rem]'>
    {!el?.card?.info?.isBestseller && el?.card?.info?.ribbon?.text}
  </p>
                </li>
              <h2 className='font-bold text-[1rem] text-blue-950'>{el?.card?.info?.name}</h2>
               <li className='flex items-center'>
                <FaRupeeSign className='text-gray-600' size={12}/>
                <p className='font-semibold'>{el?.card?.info?.price? el?.card?.info?.price/100 :  el?.card?.info?.defaultPrice/100 }</p>
              </li>
            <h3 className='text-[0.8rem] mt-4 text-gray-400'>{el?.card?.info?.description}</h3>
             
            </ul>
            <div class="image-container">
  <img class='food-image rounded-lg w-[100px] h-24' src={img_id + el?.card?.info?.imageId} alt="food image" />
              <button onClick={() => {handleCart(el?.card?.info) }} class="add-to-cart-button"><FaPlus size={18}/></button>
</div>

            </div>
   
    
  </div>
))}

      </div>
     

  

    </div>
  );
}
export default VegFood;