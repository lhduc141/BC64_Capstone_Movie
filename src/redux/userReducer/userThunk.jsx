import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";
import { message } from "antd";
import { userLocal } from "../../service/userLocal";
export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.postLogin(payload.value);
      let infoUser = data.data.content;
      userLocal.set(infoUser); //set on lstorage > not re-login after F5

      //mentor fix loginThunk bị lỗi nên cách này để chữa lửa
      payload.navigateCus();
      message.success("Đăng nhập thành công");
      window.location.reload();

      return infoUser;
    } catch (error) {
      message.error("Đăng nhập thất bại");
      return rejectWithValue(error);
    }
  }
);
