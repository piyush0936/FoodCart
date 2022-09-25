import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addToCart: (state, action) => {
        state.value.push(action.payload);
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
