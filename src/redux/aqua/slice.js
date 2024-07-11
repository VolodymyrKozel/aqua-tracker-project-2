import { createSlice, isAnyOf } from '@reduxjs/toolkit';

/* import {
  addWater,
  deleteWater,
  updateWater,
  getWaterDataDay,
  getWaterDataMonth,
} from './operations'; */

const aquaSlice = createSlice({
  name: 'aqua',
  initialState: {
    data: null,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder;
  },
});

export const aquaReducer = aquaSlice.reducer;
