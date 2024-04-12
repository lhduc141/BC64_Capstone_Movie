import { createSlice } from "@reduxjs/toolkit";
import { buyTicketThunk } from "./buyTicketThunk";

const initialState = {};

const buyTicketSlice = createSlice({
  name: "buyTicketSlice",
  initialState,
  reducers: {
    pushSelectedToChosen: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyTicketThunk.pending, (state, action) => {})
      .addCase(buyTicketThunk.fulfilled, (state, action) => {
        console.log("action.payload check: ");
      })
      .addCase(buyTicketThunk.rejected, (state) => {});
  },
});

export const {} = buyTicketSlice.actions;

export default buyTicketSlice.reducer;
