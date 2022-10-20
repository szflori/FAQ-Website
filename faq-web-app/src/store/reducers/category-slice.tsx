import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Test_Category } from "../../DUMMY_DATA";
import { Category } from "../../models/category";

interface CategoryState {
  items: Category[];
  tag: Category;
}

const initialState: CategoryState = {
  items: Test_Category,
  tag: Test_Category[0],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filteredTag: (state, action: PayloadAction<string>) => {
      state.items.find((item) => {
        if (item.id === action.payload) {
          return (state.tag = item);
        }
      });
    },
  },
});

export const { filteredTag } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
