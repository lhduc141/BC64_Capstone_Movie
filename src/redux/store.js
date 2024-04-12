import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import loadingSlice from "./loadingReducer/loadingSlice";
import movieSlice from "./movieReducer/movieSlice";
import buyTicketSlice from "./BuyTicketReducer/buyTicketSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    loadingReducer: loadingSlice,
    movieSlice: movieSlice,
    buyTicketSlice: buyTicketSlice,
  },
});
