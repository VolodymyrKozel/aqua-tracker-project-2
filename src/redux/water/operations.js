import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '../../utils/handleError';
import instance from '../../services/instance';
import toast from 'react-hot-toast';
import { dateToMonthYear } from '../../utils/sliceHelper';

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
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/add',
  async (waterData, thunkAPI) => {
    try {
      const res = await instance.post('water/add-water', waterData);
      toast.success('Water added successfully');
      const dailyNorma = thunkAPI.getState().users.user.waterDrink;
      await thunkAPI.dispatch(
        getWaterDataDay({
          date: thunkAPI.getState().water.selectedDate,
          dailyNorma,
        })
      );
      await thunkAPI.dispatch(
        getWaterDataMonthly({ month: '07', year: '2024', dailyNorma })
      );
      res.data.data.dailyNorma = thunkAPI.getState().users.user.waterDrink;
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (item, thunkAPI) => {
    try {
      const res = await instance.delete(`water/delete/${item._id}`);
      toast.success('Water deleted successfully');
      const dailyNorma = thunkAPI.getState().users.user.waterDrink;
      await thunkAPI.dispatch(
        getWaterDataDay({
          date: thunkAPI.getState().water.selectedDate,
          dailyNorma,
        })
      );
      await thunkAPI.dispatch(
        getWaterDataMonthly({ month: '07', year: '2024', dailyNorma })
      );
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/edit',
  async (waterData, thunkAPI) => {
    const { time, amount } = waterData;
    const volume = amount.toString();
    try {
      const res = await instance.patch(`water/update-volume/${waterData._id}`, {
        time,
        volume,
      });
      toast.success('Water edited successfully');
      /*       const { month, year } = dateToMonthYear(
        thunkAPI.getState().water.selectedDate
      );
      console.log(thunkAPI.getState().water.selectedDate); */
      /*  await thunkAPI.dispatch(
        getWaterDataMonthly({
          month,
          year,
          dailyNorma: thunkAPI.getState().users.user.waterDrink,
        })
      ); */
      const dailyNorma = thunkAPI.getState().users.user.waterDrink;
      await thunkAPI.dispatch(
        getWaterDataDay({
          date: thunkAPI.getState().water.selectedDate,
          dailyNorma,
        })
      );
      await thunkAPI.dispatch(
        getWaterDataMonthly({ month: '07', year: '2024', dailyNorma })
      );
      res.data.data.dailyNorma = thunkAPI.getState().users.user.waterDrink;
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
