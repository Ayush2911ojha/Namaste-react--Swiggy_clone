import React, { useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa'

const NonVegFood = ({ AllItems }) => {
  const [Hide, setHide] = useState(false)
  // const { itemCards } = AllItems
  // console.log('non itrems', AllItems)

  function hide () {
    setHide(prev => !prev)
  }

  return (
    <div className='mt-8 border-b-[14px] pb-5 border-gray-100'>
    
    </div>
  )
}

export default NonVegFood
