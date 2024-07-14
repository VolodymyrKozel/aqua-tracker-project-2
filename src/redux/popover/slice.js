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
      console.log('Hiding popover');
      state.isVisible = false;
      console.log('Hiding popover, new state:', state.isVisible);
    },
    togglePopover(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showPopover, hidePopover, togglePopover } = popoverSlice.actions;
export const popoverReducer = popoverSlice.reducer;
