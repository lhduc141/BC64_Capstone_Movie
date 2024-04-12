import { createSlice } from "@reduxjs/toolkit";
import { buyTicketThunk } from "./buyTicketThunk";

const initialState = {
  listChoosenChair: [],
};

const buyTicketSlice = createSlice({
  name: "buyTicketSlice",
  initialState,
  reducers: {
    pushSelectedToChosen: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyTicketThunk.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(buyTicketThunk.rejected, (state) => {});
  },
});

export const {} = buyTicketSlice.actions;

export default buyTicketSlice.reducer;
