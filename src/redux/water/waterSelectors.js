// src/redux/water/waterSelectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectWaterState = state => state.water;

export const selectWeeklyWaterConsumption = createSelector(
  selectWaterState,
  water => water.weeklyConsumption
);
