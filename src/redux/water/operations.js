import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleError } from '../../utils/handleError';
import instance from '../../services/instance';
import toast from 'react-hot-toast';

export const getWaterDataDay = createAsyncThunk(
  'water/fetchDailyWater',
  async (date, dailyNorma, thunkAPI) => {
    try {
      const data = await axios.get(
        `water/daily?date=${date}&dailyNorma=${dailyNorma}`
      );
      console.log(data);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getWaterDataMonthly = createAsyncThunk(
  'users/update',
  async (month, year, dailyNorma, thunkAPI) => {
    try {
      const res = await instance.get(
        `water/monthly?month=${month}&year=${year}&dailyNorma=${dailyNorma}`
      );
      toast.success('User updated successfully');
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
