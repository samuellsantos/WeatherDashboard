import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Brazil';

export const citySlice = createSlice({
  name: 'changeCity',
  initialState,
  reducers: {
    changeCity: (state:string, action) => {
      return action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export const changeCityReducer = citySlice.reducer;
