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
    let uri = `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/layThongTinPhim?MaPhim=${id}`;
    return http.get(uri);
  },
};
