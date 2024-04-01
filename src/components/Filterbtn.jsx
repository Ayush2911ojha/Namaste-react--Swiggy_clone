import React from 'react'



const Filterbtn = ({ AllfoodList, setfoodList }) => {
    
    const filterfnAll = (val) => {
        const filterval = AllfoodList?.filter((el) => (el?.info?.avgRatingString >= val));
        setfoodList(AllfoodList)
      }
    
      const filterfn = (val) => {
        const filteredvalue = AllfoodList?.filter(
          el => el?.info?.avgRatingString >= val
        )
        console.log(filteredvalue)
        setfoodList(filteredvalue)
      }
    
    return (
      <>
            <button className='btn-filter  ' onClick={() => { filterfnAll(0) }}>
    All Restaurants
  </button>
            <button className='btn-filter  ' onClick={() => { filterfn(4.5)} }>
    4.5 Above
  </button>
            <button className='btn-filter  ' onClick={() => {filterfn(4) } }>
    4 Above
            </button>
            </>
  )
}

export default Filterbtn