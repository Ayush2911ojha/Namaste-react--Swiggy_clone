import { createSlice } from '@reduxjs/toolkit';

const LocationSlice = createSlice({
    name: 'location',
    initialState: {
        items:[]
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        removeItem(state, action) {
            state.items.pop();
            // Implement logic to remove item from cart
        },
        clearItem(state, action) {
            // Implement logic to update item quantity
        }
    }
});

export const { addItem, removeItem, clearItem } = LocationSlice.actions;
export default LocationSlice.reducer;