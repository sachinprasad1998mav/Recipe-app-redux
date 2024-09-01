import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from "./RecipeSlice";

const store = configureStore({
  reducer: {
    Recipe: RecipeReducer,
  },
});

export default store;
