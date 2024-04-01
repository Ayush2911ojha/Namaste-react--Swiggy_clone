import React, { useEffect, useState } from 'react'
import { img_id } from './contants'
import RestaurantFilterVegNonveg from './restaurantsinformations/RestaurantFilterVegNonveg'
import RestaurantInfo from './restaurantsinformations/RestaurantInfo '
import RestaurantOffers from './restaurantsinformations/RestaurantOffers'
import SlidingButton from './restaurantsinformations/SlidingButton'


const RestaurantsDetails = ({ restaurantsMenu }) => {
  const [offers, setOffers] = useState([]);
  const [isVegOnly, setIsVegOnly] = useState(false);
  
    const handleToggleChange = (newValue) => {
    setIsVegOnly(newValue);
  };
 
  // cards[0] = contains heading , location, delivery instructions
  // cards[1] = contains offers
  // cards[2].cards[0]  = filter for veg/none-veg
  // cards[2].cards[1] = top-pics with carausel
  // cards[2].cards[2] = recomenedd
  console.log('from components', { restaurantsMenu })
    //  { console.log("Restauranttitle", restaurantsMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) }

  return (
    <div className='  w-full p-4  md:max-w-[778px]  m-auto '>
      {/* {console.log("restoinfo",restaurantsMenu?.cards?.[2]?.card?.card?.info) } */}
      {restaurantsMenu &&
        restaurantsMenu.cards &&
        restaurantsMenu.cards.length > 0 && (
       console.log("restaurantsMenu?.cards", restaurantsMenu?.cards),
        <RestaurantInfo
         
            Restaurantinfo={restaurantsMenu?.cards?.[0]?.card?.card?.info}
          />
        )}
      {restaurantsMenu?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers == undefined ? null : <RestaurantOffers Restaurantoffers={restaurantsMenu?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers} />}
      
      <ul className='mt-5 mb-5 flex items-center gap-2 border-b-2 pb-5'>
        <li className='font-thin text-[1rem]'>Veg Only</li>
        <li> <SlidingButton onChange={ handleToggleChange} /></li>
      </ul>
    
      
      <RestaurantFilterVegNonveg RestaurantfilterVegNonveg={restaurantsMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards} isFoodveg={isVegOnly} title={ restaurantsMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.title} />
    </div>
  )
}

export default RestaurantsDetails
