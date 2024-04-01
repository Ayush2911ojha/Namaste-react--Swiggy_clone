import React, { useState , useEffect} from 'react';
import RestaurantMenu from '../RestaurantMenu';
import BrowseMenu from './BrowseMenu';
import { Link } from 'react-router-dom';
import VegFood from './VegFood';

const BrowseMenuBtn = ({ restaurantsMenu,newveg, title, setBlur , vegORAll }) => {
  const [showMenu, setShowMenu] = useState(false);
  // console.log("titils", title)
  const arr = [];
  title?.map?.((el) => (arr.push(el)));
  // console.log('arr',...arr);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState); // Toggle the showMenu state
    
  };
  // console.log("vegORAll",vegORAll)
  vegORAll ? setBlur(true) : setBlur(false);

  // if (showMenu) {
   
  // }



  const scrollToSection = (title) => {
    const titleElements = document.querySelectorAll('.forSearch'); // Assuming each title has a class 'menu-title'
    // console.log("titleElements",titleElements)
    for (const titleElement of titleElements) {
      // Extracting the title part without the count (assuming the count is enclosed in parentheses)
      // console.log(titleElement.textContent.split('(')[0].trim().toLowerCase())
      const titleWithoutCount = titleElement.textContent.split('(')[0].trim().toLowerCase();
      if (titleWithoutCount === title.split('(')[0].trim().toLowerCase()) {
        titleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break; // Once found, exit the loop
      }
    }
  };
  

  return (
     <>
    <div className='m-auto justify-center items-center flex' >
      <div
        className='flex fixed w-[800px] justify-center '
        style={{
          transition: 'all 0.8s linear',
          bottom: restaurantsMenu ? '-960px' : '60px'
        }}
      > {console.log(showMenu)}
        

        <button
          
          onClick={toggleMenu}
          className='bg-[#5d8ed5] relative items-center rounded-3xl justify-center flex w-36 h-10 capitalize text-white text-[1rem] togglebtn'
          style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
        >
          BrowseMenu
        </button>
      </div>
    </div>
   
      {showMenu && (
        <div className='fixed'>
          
          <div className='p-8 w-[300px] h-[500px] relative bottom-[20rem]  rounded-3xl text-white font-bold  right-[-51rem] bg-[#5d8ed5] overflow-y-auto' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
           
            {arr?.slice(0 , arr.length-2)?.map?.((el, index) => (
              // console.log("el[0]", el[0]),
             <li   className=' cursor-pointer flex items-start hover:text-zinc-600 transition-all 0.7s mb-[0.7rem]' key={index} onClick={() => scrollToSection(el[1])}>{el[1]}</li>
    ))}
          </div>
          </div>
)}
    </>
  );
};

export default BrowseMenuBtn;
