import { createSlice } from '@reduxjs/toolkit';

const initialState = [0, ''];

export const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherTemperature: (state, action) => {
      return [action.payload, state[0]]
    },
    weatherDescription: (state, action) => {
      return [action.payload, state[1]]
    }
  },
});

export const { weatherTemperature, weatherDescription } = weather.actions;
export const weatherReducer = weather.reducer;
