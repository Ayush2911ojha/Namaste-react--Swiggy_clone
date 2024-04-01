import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantsCards from './RestaurantsCards';
import { Link } from 'react-router-dom';





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    arrows: true, // Show navigation arrows
    prevArrow: <button className="slick-prev btn-next">Previous</button>, // Custom previous arrow
    nextArrow: <button className="slick-next btn-next">Next</button> // Custom next arrow
  };
const SliderResaturantlist = ({ restaurantList }) => {
  const isNumeric = (val) => {
    return /^d+$/.test(val);
  }

  const extractFromUrl = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get('collection_id');
    
    } catch (error) {
      console.error("error extracting id from url", error);
      return null;
    
  }
  }
  const isUrl = (val) => {
    try {
      new URL(val);
      return true;
    
    } catch (error) {
      return false
    
  }
  }
  const validate = (entityId) => {
     
    if (isNumeric(entityId)) {
      return entityId;
    }
    else if (isUrl(entityId)) {
      const extractedId = extractFromUrl(entityId);
      if (extractedId) {
        return extractedId;
      }
      else {
        return '/error';
      }
    }
    else {
      return '/error';
    }
  }
  
  return (
    <div className="sliderpic ">
         {/* <h2 className='offer'>offer</h2> */}
        <Slider {...settings}>
          
          {restaurantList.map((el) => (
          
            <div key={el?.id*2}>
       
              <Link to={`/collection/${validate(el?.entityId)}` }><RestaurantsCards image={el?.imageId} keyId={el?.id} name={el?.accessibility?.altText} /></Link>  
                
          </div>
        ))}
        </Slider>
      </div>
  )
}

export default SliderResaturantlist;