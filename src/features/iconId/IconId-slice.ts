import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const iconSlice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    iconID: (state, action) => {
      state
      return action.payload
    },
  },
});

export const { iconID } = iconSlice.actions;
export const iconReducer = iconSlice.reducer;
