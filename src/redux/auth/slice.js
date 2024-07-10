import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: null,
      name: null,
      email: null,
      gender: null,
      weight: 0,
      activeParticipationTime: 0,
      waterGoal: 1.8,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder;
  },
});

export const authReducer = authSlice.reducer;
