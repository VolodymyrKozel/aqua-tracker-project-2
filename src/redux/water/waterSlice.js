import { createSlice } from '@reduxjs/toolkit';
import { fetchWeeklyWaterConsumption } from './waterActions';

const initialState = {
  weeklyConsumption: [],
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeeklyWaterConsumption.fulfilled, (state, action) => {
      state.weeklyConsumption = action.payload;
    });
  },
});

export default waterSlice.reducer;
