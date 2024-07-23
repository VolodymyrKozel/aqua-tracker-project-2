import { createSlice } from '@reduxjs/toolkit';
import { formatTime } from '../../utils/dateFunctions';
import {
  addWater,
  deleteWater,
  getWaterDataDay,
  getWaterDataMonthly,
  updateWater,
} from './operations';
import { format } from 'date-fns';
import { addPercentage, deletePercentage } from '../../utils/sliceHelper';

const handlingPending = state => {
  state.isLoading = true;
  state.error = null;
};

const handlingRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    selectedDate: format(new Date(), 'yyyy-MM-dd'),
    waterDataDay: [],
    waterDataMonth: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWaterDataDay.pending, handlingPending)
      .addCase(getWaterDataDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterDataDay = action.payload;
      })
      .addCase(getWaterDataDay.rejected, handlingRejected)
      .addCase(getWaterDataMonthly.pending, handlingPending)
      .addCase(getWaterDataMonthly.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterDataMonth = action.payload;
      })
      .addCase(getWaterDataMonthly.rejected, handlingRejected)
      .addCase(addWater.pending, handlingPending)
      .addCase(addWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        /*      console.log(payload.data);
        state.waterDataDay.arrDailyWater.push(payload.data); // Update the state with the new water entry
        const newValue = addPercentage(state, payload.data);
        state.waterDataMonth[state.waterDataMonth.length - 1].percentage =
          newValue;
        state.waterDataDay.percentage = newValue; */
      })
      .addCase(addWater.rejected, handlingRejected)
      .addCase(updateWater.pending, handlingPending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        /*        // Update the state with the updated water entry
        const newValue = addPercentage(state, action.payload.data);
        state.waterDataMonth[state.waterDataMonth.length - 1].percentage =
          newValue;
        state.waterDataDay.percentage = newValue;

        const index = state.waterDataDay.arrDailyWater.findIndex(
          water => water._id === action.payload.data._id
        );
        if (index !== -1) {
          state.waterDataDay.arrDailyWater[index] = action.payload.data; // Update the water entry
        } */
      })
      .addCase(updateWater.rejected, handlingRejected)
      .addCase(deleteWater.pending, handlingPending)
      .addCase(deleteWater.fulfilled, (state, { meta, payload }) => {
        console.log(state);
        state.isLoading = false;
        state.error = null;
        /*         const newValue = deletePercentage(state, payload);
        state.waterDataMonth[state.waterDataMonth.length - 1].percentage =
          newValue;
        state.waterDataDay.percentage = newValue;
        state.waterDataDay.arrDailyWater =
          state.waterDataDay.arrDailyWater.filter(
            water => water._id !== meta.arg._id // Remove the deleted water entry
          ); */
      })
      .addCase(deleteWater.rejected, handlingRejected);
  },
});

export const { setDate } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
