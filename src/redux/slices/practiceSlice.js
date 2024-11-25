import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  practiceData: {}
};

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    practicedata(state, {payload}) {
      state.practiceData = payload;
    }
  },
});

export const { practicedata } = practiceSlice.actions;

export default practiceSlice.reducer;
