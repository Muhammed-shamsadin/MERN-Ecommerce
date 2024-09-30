import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import your user slice 
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import productReducer from './slices/productSlice';


const store = configureStore({
  reducer: {
    user: userReducer, // Only include user reducer for 
    // cart: cartReducer,
    order: orderReducer,
    product: productReducer, // You can add product reducer later when needed
  },
  // You can add middleware here if needed
});

export default store;
