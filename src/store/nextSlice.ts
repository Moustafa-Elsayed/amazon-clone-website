import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";
interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}
const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};
export const nextslice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = nextslice.actions;

export default nextslice.reducer;
