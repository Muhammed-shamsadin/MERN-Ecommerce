import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

// Thunks for asynchronous actions
export const createOrder = createAsyncThunk('order/createOrder', async (orderData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/orders', orderData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Include token for authorization
    });
    return data; // Return order data
  } catch (error) {
    return rejectWithValue(error.response.data); // Handle errors
  }
});

// Create order slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload; // New item to add
      const existingItem = state.cartItems.find(x => x.product === item.product);
      
      if (existingItem) {
        // Update quantity if item already exists in cart
        existingItem.qty += item.qty;
      } else {
        // Add new item to cart
        state.cartItems.push(item);
      }
    },
    removeFromCart(state, action) {
      // Remove item from cart
      state.cartItems = state.cartItems.filter(item => item.product !== action.payload);
    },
    clearCart(state) {
      // Clear the entire cart
      state.cartItems = [];
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload; // Get the product ID and new quantity
      const existingItem = state.cartItems.find(item => item.product === id);
      if (existingItem) {
        existingItem.qty = Number(quantity); // Update the quantity
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true; // Set loading to true when request starts
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false; // Reset loading
        state.cartItems = []; // Clear cart after order is created
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false; // Reset loading
        state.error = action.payload; // Set error message
      });
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart, updateCartQuantity } = orderSlice.actions; // Export the new action
export default orderSlice.reducer;
