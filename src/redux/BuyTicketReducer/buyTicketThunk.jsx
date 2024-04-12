// buyTicketThunk.js

import { ticketService } from "../../service/ticketService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buyTicketThunk = createAsyncThunk(
  "BuyTicketThunk/buyTicketThunk",
  async ({ payload, authorization }, { rejectWithValue }) => {
    console.log("check");
    try {
      console.log(payload, "and ", authorization);
      const data = await ticketService.postTicket(payload.value, authorization);
      console.log("data:", data);
      return data;
    } catch (error) {
      console.log("error:", error.response.data); // Log error response data
      return rejectWithValue(error.response.data); // Return error response data
    }
  }
);
