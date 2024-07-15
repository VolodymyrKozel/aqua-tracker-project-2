import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { handleError } from '../../utils/handleError';

const URL_API = 'https://aqua-tracker-project-2-backend.onrender.com/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${URL_API}users/register`,
        credentials
      );
      const response = await axios.post(`${URL_API}users/login`, {
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

export const signIn = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL_API}users/login`, credentials);

      console.log(data.data.accessToken);
      setAuthHeader(data.data.accessToken);

      toast.success('Login success');
      return data.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`${URL_API}users/logout`);
    clearAuthHeader();
    toast.success('Logout success');
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.users.token;

    if (persistedToken === null) {
      toast.error('You are not logged in');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('users/current');
      console.log('user refresh');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
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
