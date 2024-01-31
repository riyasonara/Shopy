import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
