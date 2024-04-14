import { createSlice } from "@reduxjs/toolkit";
import { getListChairThunk, getSrceenInformation } from "./movieThunk";

const initialState = {
  listChair: [],
  listBeingSelectedChair: [],
  filmInformation: [],
  listAcceptChair: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    clearChar: (state) => {
      state.listBeingSelectedChair = [];
    },
    addChairAction: (state, action) => {
      let ghe = action.payload;
      let index = state.listBeingSelectedChair?.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (index !== -1) {
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

        let listChair = infoScreenPage.danhSachGhe?.slice(0, 100);
        let screenInfor = infoScreenPage.thongTinPhim;

        state.listChair = listChair;
        state.filmInformation = screenInfor;
      })
      .addCase(getListChairThunk.rejected, (state, action) => {
        state.listChair = action.payload;
      });
  },
});

export const { addChairAction, clearChar } = movieSlice.actions;

export default movieSlice.reducer;
