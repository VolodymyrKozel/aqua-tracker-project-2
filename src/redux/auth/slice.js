// import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       id: null,
//       name: null,
//       email: null,
//       gender: null,
//       weight: 0,
//       activeParticipationTime: 0,
//       waterGoal: 1.8,
//       avatar: null,
//     },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//     error: null,
//     isLoading: false,
//   },
//   extraReducers: builder => {
//     builder;
//   },
// });

// export const authReducer = authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import {
  register,
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
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
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

        const updatedFields = payload.user;
        Object.keys(updatedFields).forEach(key => {
          state.user[key] = updatedFields[key];
        });
      })
      .addCase(updateUserInfo.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
