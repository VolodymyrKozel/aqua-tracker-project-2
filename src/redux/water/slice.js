import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  getWaterDataDay,
  getWaterDataMonthly,
  updateWater,
} from './operations';

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
        handlingFulfilled;
        state.waterDataDay = action.payload;
      })
      .addCase(getWaterDataDay.rejected, handlingRejected)
      .addCase(getWaterDataMonthly.pending, handlingPending)
      .addCase(getWaterDataMonthly.fulfilled, (state, action) => {
        handlingFulfilled;
        state.waterDataMonth = action.payload;
      })
      .addCase(getWaterDataMonthly.rejected, handlingRejected)
      .addCase(addWater.pending, handlingPending)
      .addCase(addWater.fulfilled, (state, action) => {
        handlingFulfilled(state);
        state.waterDataDay.arrDailyWater.push(action.payload); // Update the state with the new water entry
      })
      .addCase(addWater.rejected, handlingRejected)
      .addCase(updateWater.pending, handlingPending)
      .addCase(updateWater.fulfilled, (state, action) => {
        handlingFulfilled(state);
        const index = state.waterDataDay.arrDailyWater.findIndex(
          water => water._id === action.payload._id
        );
        if (index !== -1) {
          state.waterDataDay.arrDailyWater[index] = action.payload; // Update the water entry
        }
      })
      .addCase(updateWater.rejected, handlingRejected)
      .addCase(deleteWater.pending, handlingPending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        handlingFulfilled(state);
        state.waterDataDay.arrDailyWater =
          state.waterDataDay.arrDailyWater.filter(
            water => water._id !== action.meta.arg // Remove the deleted water entry
          );
      })
      .addCase(deleteWater.rejected, handlingRejected);
  },
});

export const waterReducer = waterSlice.reducer;
