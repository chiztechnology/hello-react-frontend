// redux/rockets/rocketsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/v1/random_greeting';

export const fetchAllGreetings = createAsyncThunk(
  'greeting/fetchAllGreetings',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data.greeting;
  },
);

const initialState = {
  greeting: '',
  ifSucceed: false,
  isLoading: false,
  isError: false,
  historyRate: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGreetings, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllGreetings.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.ifSucceed = true;
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;
