import React from 'react'
import { logo } from './contants'
import applogo from '../components/images/app-logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
    return (
        <>
            <div className=' w-full flex justify-between px-14 py-0 shadow- text-[1.01rem] font-bold h-16  cursor-pointer' style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
            <div className=' left-header'>
                    <img className='header-img' src={applogo } alt="LOgo" />
            </div>

            <div className="right-header">
    
                <ul >
                 <li className=''>  <Link  className='hover:text-red-600 transition-all 0.8s' to={"/"}>Home</Link> </li>
                  <li>  <Link  className='hover:text-red-500 transition-all 0.8s' to={"/about"}>About Us</Link> </li>
                    <li>  <Link  className='hover:text-red-400 transition-all 0.8s' to={"/contact"}>Contact us</Link> </li>
                        {/* <li className='Search'><input type="text" placeholder='What are You looking for ?' /></li>
                        <button className='search-Btn '>Search</button> */}
              <li> <Link className='hover:text-red-400 transition-all 0.8s' to={"/cart"}>Cart({cartItems.length})</Link></li>

                        
                </ul>

                </div>
                </div>
            </>
  )
}

export default Header