import React from 'react'
import { useSelector } from 'react-redux'
import CartFoodItems from './CartFoodItems'

const Cart = () => {
    // console.log("Cart Item ",item)
    const cartItems = useSelector((state) => state.cart.items)
    console.log("cartItems", cartItems)
    return (
        <>
            <h2 className='font-bold my-11 flex  justify-center items-center text-[3rem] text-black'> Your <span className='text-green-500'> Cart</span></h2>
            {/* <div>{cartItems[1].name}</div> */}
            {/* <CartFoodItems item = {cartItems[0]}/> */}
            <div className='w-[70%] m-auto mb-4 flex-col gap-5  rounded-2xl overflow-hidden'>
            {cartItems?.map((el) => (
                <div className='my-20 shadow-xl p-10 rounded-lg' key={el.id}><CartFoodItems {...el}/></div>
            ))}
                </div>
            
            </>
  )
}

export default Cart