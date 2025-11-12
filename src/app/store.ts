// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../redux/cartSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer, // must be an object
    wishlist: wishlistReducer,
     cart: cartReducer,
  },
});

export default store;




