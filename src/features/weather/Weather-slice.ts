import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    iconID: (state, action) => {
      return action.payload
    },
  },
});

export const { iconID } = weather.actions;
export const iconReducer = weather.reducer;
