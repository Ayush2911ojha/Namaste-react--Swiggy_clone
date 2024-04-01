import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DelFood from './DelFood';
import { Link } from 'react-router-dom';
import RestaurantsDetails from './RestaurantsDetails';



const SliderDelFood = ({settings1, AllfoodList}) => {
  return (
    
    <div className='sliderpic'>
    <Slider {...settings1}>
      {AllfoodList?.map(el => (
        <div key={el?.info?.id * 2}>
          
          <Link className='nav-link' to={`/restaurant/${el?.info?.id}`}>

            
            <DelFood 
                 
              image={el?.info?.cloudinaryImageId}
              keyId={el?.info?.id*3}
              name={el?.info?.name}
              price={el?.info?.aggregatedDiscountInfoV3?.subHeader}
              area={el?.info?.areaName}
              cuisines={el?.info?.cuisines}
            />
          </Link>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default SliderDelFood