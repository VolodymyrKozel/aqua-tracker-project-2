import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  logIn,
  logOut,
  refreshUser,
  updateUserInfo,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    user: {
      name: null,
      email: null,
      avatarURL: null,
      dailyWaterRate: 0,
      activeTimeSport: 0,
      weight: 0,
      gender: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
      })

      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateUserInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, ...payload.user };
      })
      .addCase(updateUserInfo.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
