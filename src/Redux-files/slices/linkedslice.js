// linkSlice.js

import { createSlice } from '@reduxjs/toolkit';

const linkSlice = createSlice({
  name: 'linked',
  initialState: {
    isLinked: false,
  },
  reducers: {
    setIsLinked: (state, action) => {
      state.isLinked = action.payload;
    },
  },
});

export const { setIsLinked } = linkSlice.actions;
export const selectIsLinked = (state) => state.linked.isLinked;
export default linkSlice.reducer;
