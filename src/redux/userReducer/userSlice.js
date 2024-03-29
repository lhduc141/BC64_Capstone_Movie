import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "useSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      state.infoUser = null;
      userLocal.delete();
    },
  },

  //xử lý action bất đồng bộ
  extraReducers: (builder) => {
    builder
      //fullfill => success
      .addCase(
        loginThunk.fulfilled,
        (state /*initialState */, action /*pushValue*/) => {
          state.infoUser = action.payload;
          userLocal.set(action.payload);
        }
      )

      //pending => waiting
      .addCase(loginThunk.pending, (state, action) => {})

      //rejected => fail
      .addCase(loginThunk.rejected, (state, action) => {
        state.infoUser = action.payload;
      });
  },
});

export const { logOutAction } = userSlice.actions;

export default userSlice.reducer;
