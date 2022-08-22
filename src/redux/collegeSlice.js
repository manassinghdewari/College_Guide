import { createSlice } from "@reduxjs/toolkit";

export const collegeSlice = createSlice({
  name: "college",
  initialState: {
    collegeData: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.collegeData = null;
      state.error = false;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.collegeData = action.payload;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.collegeData = null;
      state.error = true;
    },
  },
});

export const { fetchFailure, fetchStart, fetchSuccess } = collegeSlice.actions;

export default collegeSlice.reducer;
