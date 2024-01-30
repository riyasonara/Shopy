// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer;
