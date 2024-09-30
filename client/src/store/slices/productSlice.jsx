import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  products: [],
  product: null, // Add product to initial state
  loading: false,
  error: null,
};

// Thunks for asynchronous actions

// Fetch all products
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('http://localhost:5000/api/products');
  return response.data;
});

// Fetch product by ID
export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id) => {
  const response = await axios.get(`http://localhost:5000/api/products/${id}`);
  return response.data;
});

// Create a new product
export const createProduct = createAsyncThunk('product/createProduct', async (productData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products', productData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update a product
export const updateProduct = createAsyncThunk('product/updateProduct', async ({ id, productData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/products/${id}`, productData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete a product
export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:5000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Create product slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true; // Handle loading state
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false; // Reset loading
        state.product = action.payload; // Store the fetched product
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false; // Reset loading
        state.error = action.payload; // Set error message
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((item) => item._id === updatedProduct._id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.payload;
        state.products = state.products.filter((item) => item._id !== id);
      });
  },
});

// Export actions and reducer
export const {} = productSlice.actions;
export default productSlice.reducer;
