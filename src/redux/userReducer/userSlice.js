import { createSlice } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { userUpdateThunk } from "./userThunk.jsx";
// import { loginThunk } from "./userThunk";

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "useSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      state.infoUser = null;
      localStorage.removeItem("token");
      userLocal.delete();
      window.location.href = "/";
    },
  },

  //xử lý action bất đồng bộ
  extraReducers: (builder) => {
    /*
        Bất đồng bộ có 3 trạng thái trả về:
          -fullfill (đã thành công)
          -pending (đang xử lý)
          -rejected (đã thất bại)
        => sử dụng addCase như switch với mỗi trường hợp
      */

    //fullfill => success
    import("./userThunk.jsx").then(({ loginThunk }) => {
      builder
        .addCase(
          loginThunk.fulfilled,
          (state /*initialState */, action /*pushValue*/) => {
            //save on redux & local storage
            console.log("userThunk check");
            state.infoUser = action.payload;
            userLocal.set(action.payload); //set on lstorage > not re-login after F5
          }
        )

        //pending => waiting
        .addCase(loginThunk.pending, (state, action) => {})

        //rejected => fail
        .addCase(loginThunk.rejected, (state, action) => {
          console.log("Fail");
        })

        // case update user
        .addCase(userUpdateThunk.fulfilled, (state, action) => {
          state.infoUser = action.payload;
          userLocal.set(action.payload); //set on lstorage > not re-login after F5
        })
        .addCase(userUpdateThunk.pending, (state, action) => {})
        .addCase(userUpdateThunk.rejected, (state, action) => {});
    });
  },
});

export const { logOutAction } = userSlice.actions;

export default userSlice.reducer;
