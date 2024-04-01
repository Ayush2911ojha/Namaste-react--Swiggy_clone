import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        removeItem(state, action) {
            // Implement logic to remove item from cart
        },
        clearItem(state, action) {
            // Implement logic to update item quantity
        }
    }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;