import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestWaterMonthly } from '../../services/waterApi';

export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthWater',
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await requestWaterMonthly({ month, year });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
