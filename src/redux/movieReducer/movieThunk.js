import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieSer } from "../../service/movieService";

export const getListChairThunk = createAsyncThunk(
  "movieReducer/movieThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.getListChair(payload);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
