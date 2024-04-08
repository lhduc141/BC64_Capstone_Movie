import { createSlice } from "@reduxjs/toolkit";
import { getListChairThunk } from "./movieThunk";

const initialState = {
  listChair: [],
  listBeingSelectedChair: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addChairAction: (state, action) => {
      let ghe = action.payload;
      let index = state.listBeingSelectedChair?.findIndex(
        (gheDangDat) => gheDangDat.maGhe == ghe.maGhe
      );
      if (index != -1) {
        // nếu ghế đó đã tồn tại trong list ghế đang đặt thì xóa nó đi
        state.listBeingSelectedChair.splice(index, 1);
      } else {
        // nếu ghế đó chưa tồn tại trong list ghế đang đặt thì thêm nó vào
        state.listBeingSelectedChair.push(ghe);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListChairThunk.fulfilled, (state, action) => {
        let infoScreenPage = action.payload;
        console.log("🚀 ~ .addCase ~ infoScreenPage:", infoScreenPage);
        let listChair = infoScreenPage.danhSachGhe?.slice(0, 100);
        state.listChair = listChair;
      })
      .addCase(getListChairThunk.rejected, (state, action) => {
        state.listChair = action.payload;
      });
  },
});

export const { addChairAction } = movieSlice.actions;

export default movieSlice.reducer;
