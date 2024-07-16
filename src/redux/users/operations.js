import { createAsyncThunk } from '@reduxjs/toolkit';
import instance, {
  setAuthHeader,
  clearAuthHeader,
} from '../../services/instance';
import toast from 'react-hot-toast';
import { handleError } from '../../utils/handleError';

export const signUp = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`users/register`, credentials);
      const response = await instance.post(`users/login`, {
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
      const { data } = await instance.post(`users/login`, credentials);

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
    await instance.post(`users/logout`);
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
      console.log('persistedToken', persistedToken);
      setAuthHeader(persistedToken);
      const { data } = await instance.get(`users/current`);
      return data.user;
    } catch (error) {
      toast.error('You are not logged in');
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (formData, thunkAPI) => {
    try {
      const res = await instance.patch('/users/update', formData, {
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
