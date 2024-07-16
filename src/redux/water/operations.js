import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '../../utils/handleError';
import instance, { setAuthHeader } from '../../services/instance';
import toast from 'react-hot-toast';

export const getWaterDataDay = createAsyncThunk(
  'water/fetchDailyWater',
  async ({ date, dailyNorma }, thunkAPI) => {
    try {
      const res = await instance.get(
        `water/daily?date=${date}&dailyNorma=${dailyNorma}`
      );
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getWaterDataMonthly = createAsyncThunk(
  'water/fetchMonthlyWater',
  async ({ month, year, dailyNorma }, thunkAPI) => {
    try {
      /*   свариться що надо токен але працює і без нього бо бекенд відсутній
       const state = thunkAPI.getState();
      setAuthHeader(state.users.token); */
      const res = await instance.get(
        `water/monthly?month=${month}&year=${year}&dailyNorma=${dailyNorma}`
      );
      /*  toast.success('monthly water fetched successfully'); */
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
