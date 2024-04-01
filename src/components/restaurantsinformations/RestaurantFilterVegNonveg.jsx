import React, { useEffect, useState } from 'react'
import VegFood from './VegFood'
import NonVegFood from './NonVegFood'
import BrowseMenuBtn from './BrowseMenuBtn'

const RestaurantFilterVegNonveg = ({
  RestaurantfilterVegNonveg,
  isFoodveg,
  title
}) => {

  const [blur, setBlur] = useState(false);
    const [titleItem, setTitle] = useState([]);
console.log("non", RestaurantfilterVegNonveg)
  const newveg = RestaurantfilterVegNonveg
  ?.slice(1)
  ?.map((el) => {
    const items = el?.card?.card?.itemCards;
    const title = el?.card?.card?.title;


 const ans = el?.card?.card?.itemCards?.filter((filterEle) => (
    filterEle?.card?.info?.isVeg == 1 &&
    filterEle?.card?.info?.itemAttribute?.vegClassifier == "VEG"
 ));

return [ans, title];
  });
  // useEffect(() => {
  //   newveg?.slice(0, newveg?.length - 2)?.forEach((el) => {
  //      console.log("ele from ",el)  
  //     handleTitle(el)
          
  //      });
    
    
  //  },[el]);
  //    function handleTitle(el) {
  //     // console.log("el[]",el[1])
  //      setTitle(el[1]);
  //   }
    


  // console.log("veg", newveg);
  const handleBlur = (state) => { 

    setBlur(state)
  }
  return (
    <div>
      
      <BrowseMenuBtn title={newveg} setBlur={handleBlur } />
      <div className={ blur? 'blur-sm': ""}>
      {
      !isFoodveg?(newveg?.slice(0, newveg?.length - 2)?.map((el, index) => (
        <div key={index} >
        
         
        <VegFood vegetarianItems={el[0]} title={el[1]} />
        </div>
      ))) :
          
      (RestaurantfilterVegNonveg?.slice(1, newveg?.length - 2)?.map((el, index) => (
        <div key={index} >
        
          {console.log("el", el?.card?.card?.itemCards, "title", el?.card?.card?.title ) }
          <VegFood vegetarianItems={el?.card?.card?.itemCards} title ={el?.card?.card?.title } />
        </div>
      )))
        }
        </div>
    </div>
  );
  
}

export default RestaurantFilterVegNonveg

