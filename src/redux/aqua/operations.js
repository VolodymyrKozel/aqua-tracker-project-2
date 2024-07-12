import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWaterDataDay = createAsyncThunk(
  "water/fetchDay",
  async ({ day, month, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/water/consumption_day/${day}/month/${Number(month) + 1}/year/${year}`
      );
      return { data: response.data, day, month: Number(month) + 1, year };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWaterDataMonth = createAsyncThunk(
  "water/fetchMonth",
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/water/consumption_month/${Number(month) + 1}/year/${year}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  "water/add",
  async (waterData, thunkAPI) => {
    try {
      const response = await axios.post("/water/add", waterData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  "water/edit",
  async ({ id, waterData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/edit/${id}`, waterData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/delete",
  async (waterId, thunkAPI) => {
    try {
      await axios.delete(`/water/delete/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);