import { createSlice } from "@reduxjs/toolkit";

export const collegeRegSlice = createSlice({
  name: "collegeRegistrationId",
  initialState: {
    collegeId: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.collegeId = null;
      state.error = false;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.collegeId = action.payload;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.collegeId = null;
      state.error = true;
    },
  },
});

export const { fetchFailure, fetchStart, fetchSuccess } =
  collegeRegSlice.actions;

export default collegeRegSlice.reducer;
