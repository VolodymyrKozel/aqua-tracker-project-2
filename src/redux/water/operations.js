import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '../../utils/handleError';
import instance from '../../services/instance';
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
      res.data = {};
      res.data.volume = item.volume;
      res.data.dailyNorma = thunkAPI.getState().users.user.waterDrink;
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
      res.data.data.dailyNorma = thunkAPI.getState().users.user.waterDrink;
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
