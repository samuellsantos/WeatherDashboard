import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Brasil';

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
