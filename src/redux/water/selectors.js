import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.water.isLoading;

export const selectMonthlyWater = state => state.water.waterDataMonth;

const selectWaterDataDay = state => state.water.waterDataDay;

export const selectDailyWater = createSelector(
  [selectWaterDataDay],
  waterDataDay => waterDataDay?.arrDailyWater || []
);

export const selectPercentageWater = createSelector(
  [selectWaterDataDay],
  waterDataDay => waterDataDay?.percentage || 0
);

export const selectSelectedDate = state => state.water.selectedDate;
