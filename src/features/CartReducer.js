import { createSlice } from '@reduxjs/toolkit';

const initialCart = [];

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    value: initialCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].qnty += 1;
      } else {
        state.value.push({ ...action.payload, qnty: action.payload.qnty + 1 });
      }
    },
    removeItem: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload;
      });
    },
    removeOneItem: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].qnty -= 1;
      }
    },
    addOneItem: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].qnty += 1;
      }
    },
  },
});

export const { addToCart, removeItem, removeOneItem, addOneItem } =
  cartSlice.actions;
export default cartSlice.reducer;
