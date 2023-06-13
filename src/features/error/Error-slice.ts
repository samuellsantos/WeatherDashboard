import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorRedux: (state, action) => {
      return action.payload
    },
  },
});

export const { setErrorRedux } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
