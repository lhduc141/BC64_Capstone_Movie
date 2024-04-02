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
      /*
        Bất đồng bộ có 3 trạng thái trả về: 
          -fullfill (đã thành công)
          -pending (đang xử lý)
          -rejected (đã thất bại)
        => sử dụng addCase như switch với mỗi trường hợp
      */

      //fullfill => success
      .addCase(
        loginThunk.fulfilled,
        (state /*initialState */, action /*pushValue*/) => {
          //save on redux & local storage

          state.infoUser = action.payload;
          userLocal.set(action.payload); //set on lstorage > not re-login after F5
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
