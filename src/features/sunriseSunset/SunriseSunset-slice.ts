import { createSlice } from '@reduxjs/toolkit';

const initialState = [0, 0];

export const sunSlice = createSlice({
  name: 'sun',
  initialState,
  reducers: {
    Sunrise: (state, action) => {
      return [action.payload, state[1]];
    },
    Sunset: (state, action) => {
      return [state[0], action.payload];
    },
  },
});

export const { Sunrise, Sunset } = sunSlice.actions;
export const sunReducer = sunSlice.reducer;
