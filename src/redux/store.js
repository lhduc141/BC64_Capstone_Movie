import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
});
