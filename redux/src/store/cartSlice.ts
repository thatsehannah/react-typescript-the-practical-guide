import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartItemNoQty } from '../types/CartItem';

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //adding items to the cart
    //PayloadAction is essential of type CartItem without the quantity property
    addToCart(state: CartState, action: PayloadAction<CartItemNoQty>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    //removing item from the cart
    //PayloadAction<string> is the id of the item
    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
    clearCart(state: CartState) {
      if (state.items.length > 0) {
        state.items.length = 0;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; //action creators
export default cartSlice.reducer; //Exporting the reducer, which is used in the store
