import { createSlice } from '@reduxjs/toolkit';
import { getWaterDataDay } from './operations';

const handlingPending = state => {
  state.isLoading = true;
  state.error = null;
};

const handlingRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlingFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    waterDataDay: [],
    waterDataMonth: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getWaterDataDay.pending, handlingPending)
      .addCase(getWaterDataDay.fulfilled, (state, action) => {
        handlingFulfilled();
        state.waterDataDay = action.payload.data;
      })
      .addCase(getWaterDataDay.rejected, handlingRejected);
  },
});

export const waterReducer = waterSlice.reducer;