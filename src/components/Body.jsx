import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import menu from './menuApi'
import RestaurantsCards from './RestaurantsCards'
import DelFood from './DelFood'
import SliderResaturantlist from './SliderResaturantlist'
import SliderDelFood from './SliderDelFood'
import Filterbtn from './Filterbtn'
import Simmer from './Simmer'
import DeliveryLocationForm from './DeliveryLocationForm'
import { useSelector } from 'react-redux'


import { Link } from 'react-router-dom';
import Example from './Shimmer'

const Body = () => {


  // const [restaurantList, setrestaurantList] = useState([])
  // const [foodList, setfoodList] = useState(menu)
  // const [AllfoodList, setAllfoodList] = useState(foodList)
  // const [cta, setcta] = useState(null)
  // useEffect(() => {
  //   callApi()
  // }, [])

  // const callApi = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page'
  //     )
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data')
  //     }
  //     const data = await response.json()
  //     console.log("main home",data)

  //     setcta(
  //       data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     )
  //     setfoodList(
  //       data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     )
  //     setAllfoodList(
  //       data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     )
  //     setrestaurantList(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   }
  // }



 const cartItems = useSelector((state) => state.location.items)
  console.log("cartItems", cartItems)
  // setLocation(cartItems[0]);
  const [restaurantList, setRestaurantList] = useState([]);
const [foodList, setFoodList] = useState(menu);
const [AllFoodList, setAllFoodList] = useState(foodList);
const [nextOffset, setNextOffset] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: 28.619267,
    longitude:77.460722
  
  });
  const [header, setHeader] = useState("Lucknow");
  const [OnlineDelivery, setOnlineDelivery] = useState("lucknow");
   
  
// useEffect(() => {
//     callApi();

//     // Add event listener for scroll event
//     window.addEventListener('scroll', handleScroll);

//     // Remove event listener when component unmounts
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);

// const handleScroll = () => {
//     // Check if the user has scrolled to the bottom of the page
//     if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//     ) {
//         // Trigger callApi if not already loading and there is a nextOffset
//         if (!isLoading && nextOffset) {
//             callApi();
//         }
//     }
// };

      useEffect(() => {
        // Call the API initially
        callApi();

        // Add scroll event listener
        // window.addEventListener('scroll', handleScroll);

        // // Remove event listener on component unmount
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, [location]);

    // useEffect(() => {
    //     // When restaurantList updates, start a timer to fetch more data after a delay
    //     const timer = setTimeout(() => {
    //         if (!isLoading && nextOffset) {
    //             callApi();
    //         }
    //     }, 9000); // Adjust the delay as needed

    //     // Clear the timer if the component unmounts or restaurantList updates again
    //     return () => clearTimeout(timer);
    // }, []);

    // const handleScroll = () => {
    //     // Check if the user has scrolled down
    //     if (window.scrollY > 100 && !isLoading && nextOffset) { // Adjust the scroll threshold as needed
    //         callApi();
    //     }
    // };

const callApi = async () => {
    try {
        setIsLoading(true); // Set loading state to true while fetching data

        const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${26.87560 }&lng=${80.91150}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${nextOffset}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("main home", data);

        // Update restaurantList, foodList, and allFoodList state
        setRestaurantList(prevState => [...prevState, ...data?.data?.cards[0]?.card?.card?.imageGridCards?.info]);
        setFoodList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllFoodList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setHeader(data?.data?.cards[1]?.card?.card?.header?.title)
      setOnlineDelivery(data?.data?.cards[2]?.card?.card?.title)

      // Update nextOffset state for pagination
      console.log("data?.data?.pageOffset?.nextOffset",data?.data?.pageOffset?.nextOffset)
        setNextOffset(data?.data?.pageOffset?.nextOffset);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setIsLoading(false); // Set loading state back to false after fetching data
    }
};


  // Settings for the carousel
console.log(location.latitude, location.longitude)
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    arrows: true, // Show navigation arrows
    prevArrow: <button className='slick-prev btn-next'>Previous</button>, // Custom previous arrow
    nextArrow: <button className='slick-next btn-next'>Next</button> // Custom next arrow
  }
  const onLocationChange = (coordinates ) => {
    console.log("onLocationcahne", coordinates?.longitude)
    
    setLocation(coordinates);
     
  }
  {
    return (
    <>
      {restaurantList.length === 0 ? (
        <Example />
      ) : (
            <>
              <h1>Enter you loaction</h1>
              <DeliveryLocationForm onLocationChange={onLocationChange}/>
          <h1 className='restaurant-heading'>Whats on your mind?...</h1>
          <SliderResaturantlist restaurantList={restaurantList} />

              <h1 className='restaurant-heading'> {header}</h1>
          <SliderDelFood settings1={settings1} AllfoodList={AllFoodList} />

          <div className=' widthSet'>
            <span className=' btn-filter span-btn'>Filter</span>
            <Filterbtn AllfoodList={AllFoodList} setfoodList={setAllFoodList} />
          </div>

          <h2 className='restaurant-heading rest-del-head'>
                { OnlineDelivery}
          </h2>
          <div className='cards-container'>
            {foodList?.map(el => (
              <div key={el?.info?.id * 4}>
                <Link className='nav-link' to={`/restaurant/${el?.info?.id}`}>
                  <DelFood
                    image={el?.info?.cloudinaryImageId}
                    keyId={el?.info?.id * 5}
                    name={el?.info?.name}
                    price={el?.info?.aggregatedDiscountInfoV3?.subHeader}
                    discount={el?.info?.aggregatedDiscountInfoV3?.header}
                    area={el?.info?.areaName}
                    cuisines={el?.info?.cuisines}
                    time={el?.info?.sla?.slaString}
                    rating={el?.info?.avgRatingString}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
  }
  
}

export default Body
