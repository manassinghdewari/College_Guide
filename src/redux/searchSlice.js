import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    page: 1,
    searchQuery: "",
    sortBy: "",
    sortOrder: "",
  },
  reducers: {
    searchCollege: (state, action) => {
      state.searchQuery = action.payload;
    },
    sortCollege: (state, action) => {
      state.sortBy = action.payload;
    },
    sortCollegeOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { searchCollege, sortCollege, sortCollegeOrder } =
  searchSlice.actions;

export default searchSlice.reducer;
