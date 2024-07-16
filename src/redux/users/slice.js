import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  updateUser,
  fetchUser,
} from './operations';

const usersSlice = createSlice({
  name: 'users',
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
    isLoggedIn: true,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state /* , { payload } */) => {
        state.isLoading = false;
        /*         state.user = payload.data.user;
        state.token = payload.accessToken; */
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
      })

      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, state => {
        state.isLoading = false;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, ...payload.user };
      })
      .addCase(fetchUser.rejected, state => {
        state.isLoading = false;
      })

      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, ...payload.user };
      })
      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
