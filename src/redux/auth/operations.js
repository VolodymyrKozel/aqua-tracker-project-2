import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  requestLogin,
  requestLogout,
  requestRegister,
  requestSendVerify,
  requestUserInfo,
  updateUserProfiles,
  uploadUserAvatars,
} from '../../services/userApi.js';

const options = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const emailWaitOptions = {
  ...options,
  autoClose: false,
};

// SignUp

export const userRegister = createAsyncThunk(
  'users/register',
  async (formData, thunkAPI) => {
    try {
      const res = await requestRegister(formData);
      toast.success('Successfully registered. Check your email', {
        ...emailWaitOptions,
      });

      return res;
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error(
          'This email is already in use. Please check your email or use a different one.',
          {
            ...options,
          }
        );
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// SignIn

export const logIn = createAsyncThunk(
  'users/login',
  async (formData, thunkAPI) => {
    try {
      const res = await requestLogin(formData);
      toast.success('Successfully login', { ...options });
      return res;
    } catch (err) {
      switch (err.response?.status) {
        case 401:
          toast.error('Email or password is wrong', { ...options });
          break;
        case 404:
          toast.error('User not found', { ...options });
          break;
        default:
          toast.error(err.response, { ...options });
      }
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Logout

export const logOut = createAsyncThunk(
  'users/logout',
  async (token, thunkAPI) => {
    try {
      await requestLogout(token);
      // toast.success('Successfully logout', { ...options });
      return;
    } catch (err) {
      toast.error(err.message, { ...options });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Current

export const getCurrentUser = createAsyncThunk(
  'users/current',

  async (token, thunkAPI) => {
    try {
      const response = await requestUserInfo(token);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Update

export const sendVerify = createAsyncThunk(
  'users/verify',
  async ({ verificationToken, formData }, thunkAPI) => {
    try {
      const res = await requestSendVerify(verificationToken, formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Avatar

export const uploadUserAvatar = createAsyncThunk(
  'users/avatars',
  async (formData, thunkAPI) => {
    try {
      const response = await uploadUserAvatars(formData);
      toast.success('Avatar uploaded successfully', { ...options });
      return response.avatarURL;
    } catch (err) {
      toast.error(err.message, { ...options });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  'users/update',
  async (formData, thunkAPI) => {
    try {
      const response = await updateUserProfiles(formData);
      toast.success('User update successfully', { ...options });
      return response.user;
    } catch (err) {
      toast.error(err.message, { ...options });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
