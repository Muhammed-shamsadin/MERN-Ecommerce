import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import your user slice reducer

const store = configureStore({
  reducer: {
    user: userReducer, // Only include user reducer for now
    // product: productReducer, // You can add product reducer later when needed
  },
  // You can add middleware here if needed
});

export default store;
