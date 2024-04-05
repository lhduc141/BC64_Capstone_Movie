import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import loadingSlice from "./loadingReducer/loadingSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    loadingReducer: loadingSlice,
  },
});
