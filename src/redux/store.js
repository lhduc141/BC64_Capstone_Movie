import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    numberCheck: (state) => 3,
  },
});
