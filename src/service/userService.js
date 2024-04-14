import { http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(url, data);
  },
  postSignup: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return http.post(uri, data);
  },

  updateUser: (data) =>
    http.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data),

  getAccountInfo: () => http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`),
};
