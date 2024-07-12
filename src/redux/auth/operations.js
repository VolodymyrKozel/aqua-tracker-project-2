import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { handleError } from '../../utils/handleError';

/* axios.defaults.baseURL = 'https://webmail.swagger.epowhost.com:3443/'; */

const URL_API = 'https://nodejs-hw-mongodb-1-vfnl.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL_API}auth/register`, credentials);
      const response = await axios.post(`${URL_API}auth/login`, {
        email: credentials.email,
        password: credentials.password,
      });
      setAuthHeader(response.data.accessToken);
      toast.success('User created successfully');
      return { data, accessToken: response.data.accessToken };
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL_API}auth/login`, credentials);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`${URL_API}auth/logout`);
    clearAuthHeader();
    toast.success('Logout success');
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      toast.error('You are not logged in');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/updateInfo',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('User updated successfully');
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
