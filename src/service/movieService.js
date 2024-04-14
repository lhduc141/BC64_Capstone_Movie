import { MA_NHOM, http } from "./urlConfig";

export const movieSer = {
  getBannerMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return http.get(uri);
  },
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getDetailMovie: (id) => {
    let uri = `/api/QuanLyPhim/layThongTinPhim?MaPhim=${id}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getListChair: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return http.get(uri);
  },
  layThongTinHeThongRap: () => {
    let uri = `/api/QuanLyRap/LayThongTinHeThongRap`;
    return http.get(uri);
  },
  layThongTinLichChieuHeThongRap: (
    maHeThongRap = "BHDStar",
    maNhom = "GP09"
  ) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${
      maHeThongRap || "BHDStar"
    }&MaNhom=${maNhom}`;
    return http.get(uri);
  },
};
