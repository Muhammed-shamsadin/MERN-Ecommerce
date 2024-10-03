import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
  isAdmin: false, // Added isAdmin property
};

// Thunks for asynchronous actions
export const registerUser = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data; // Ensure response includes isAdmin
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Registration failed');
  }
});

export const loginUser = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    return response.data; // Ensure response includes isAdmin
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Login failed');
  }
});

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) return rejectWithValue('No token found');
  
  try {
    const response = await axios.get('http://localhost:5000/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Ensure response includes isAdmin
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Fetching profile failed');
  }
});

export const updateUserProfile = createAsyncThunk('user/updateProfile', async (userData, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) return rejectWithValue('No token found');
  
  try {
    const response = await axios.put('http://localhost:5000/api/auth/profile', userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Ensure response includes isAdmin
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Profile update failed');
  }
});

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAdmin = false; // Reset isAdmin on logout
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // Registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = action.payload.isAdmin; // Capture isAdmin from response
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = action.payload.isAdmin; // Capture isAdmin from response
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch User Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = action.payload.isAdmin; // Capture isAdmin from response
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update User Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // update user info in the state
        state.isAdmin = action.payload.isAdmin; // Capture isAdmin from response
        localStorage.setItem('token', action.payload.token); // update token if it was renewed
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;
