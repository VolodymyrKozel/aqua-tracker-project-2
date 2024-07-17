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
      toast.success('User created successfully');
      await thunkAPI.dispatch(
        signIn({
          email: credentials.email,
          password: credentials.password,
        })
      );
      await thunkAPI.dispatch(fetchUser());

      return data;
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
      setAuthHeader(data.data.accessToken);
      await thunkAPI.dispatch(fetchUser());
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

export const fetchUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`users/current`);
      return data.user;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (user, thunkAPI) => {
    try {
      const res = await instance.patch('/users/update', user);
      toast.success('User updated successfully');
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/avatar',
  async (file, thunkAPI) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append('avatarURL', file);
      const userId = thunkAPI.getState().user.id; // Adjust based on how you store the user data in your state
      formData.append('id', userId);
      const res = await instance.patch('/users/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Avatar updated successfully');
      return res.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
