import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

const popoverSlice = createSlice({
  name: 'popover',
  initialState,
  reducers: {
    showPopover(state) {
      state.isVisible = true;
    },
    hidePopover(state) {
      state.isVisible = false;
    },
    togglePopover(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showPopover, hidePopover, togglePopover } = popoverSlice.actions;
export const popoverReducer = popoverSlice.reducer;