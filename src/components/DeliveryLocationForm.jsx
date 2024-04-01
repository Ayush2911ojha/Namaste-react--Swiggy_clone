import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/LocationSlice';
const DeliveryLocationForm = ({ onLocationChange }) => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
     
  // function handleCart(item) {
    // console.log("Cart Item ", item);
   
  //  }
    // Call geocoding API to convert city to coordinates
    const coordinates = await geocodeCity(city);
    // Pass coordinates to parent component
  
     dispatch(addItem(coordinates))
    onLocationChange(coordinates);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input  className=' bg-gray-50' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button  className='bg-pink-200 text-white rounded-lg hover:bg-pink-300 p-2' type="submit">Submit</button>
    </form>
  );
};

const geocodeCity = async (city) => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json`);
    const data = await response.json();
    if (data.length > 0) {
        const location = data[0];
        console.log("location ",location.lat )
      return { latitude: location.lat, longitude: location.lon };
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    console.error('Error geocoding city:', error);
    return null;
  }
};


export default DeliveryLocationForm;
