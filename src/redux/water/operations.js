import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleError } from '../../utils/handleError';

const URL_API = 'https://aqua-tracker-project-2-backend.onrender.com';

export const getWaterDataDay = createAsyncThunk(
  'water/fetchDailyWater',
  async (date, dailyNorma, thunkAPI) => {
    try {
      const data = await axios.get(
        `${URL_API}water/daily?date=${date}&dailyNorma=${dailyNorma}`
      );
      console.log(data);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
