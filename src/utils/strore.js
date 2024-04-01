
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import locationReducer from './LocationSlice';

export const store=  configureStore({
    reducer: {
        cart: cartReducer,
        // other reducers can be added here
        location: locationReducer
    }
});




