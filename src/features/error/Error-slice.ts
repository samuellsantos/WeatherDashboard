import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

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
