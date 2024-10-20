import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
