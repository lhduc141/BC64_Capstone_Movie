import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.postLogin(payload);
      return data.data.content;
    } catch (error) {
      console.log(error);
    }
  }
);
