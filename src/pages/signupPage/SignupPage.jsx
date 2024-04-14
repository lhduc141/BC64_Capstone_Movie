// export default SignUpPage;
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { userService } from "../../service/userService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const formSignup = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maNhom: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string()
        .required("Mật khẩu không được để trống")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
      nhapLaiMatKhau: Yup.string()
        .required("Nhập lại mật khẩu không được để trống")
        .oneOf([Yup.ref("matKhau"), null], "Mật khẩu không khớp"),
      hoTen: Yup.string().required("Họ tên không được để trống"),
      email: Yup.string()
        .required("Email không được để trống")
        .email("Email không hợp lệ"),
      soDienThoai: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(/^0\d{9}$/, "Số điện thoại không hợp lệ"),
      maNhom: Yup.string()
        .required("Mã nhóm không được để trống")
        .matches(/^\d{2}$/, "Mã nhóm phải có 2 chữ số"),
    }),
    onSubmit: async (value) => {
      try {
        const data = await userService.postSignup(value);
        message.success("Đăng ký thành công!");
        navigate("/"); // Chuyển hướng về trang chủ
      } catch (error) {
        console.log("error: ", error);
      }
    },
  });

  return (
    <div>
      <form
        className="border p-3 rounded-md space-y-2"
        onSubmit={formSignup.handleSubmit}
      >
        <div>
          <h2 className="text-2xl font-medium flex justify-center">Đăng ký</h2>
          <label className="text-sm font-medium " htmlFor="taiKhoan">
            Tài khoản
          </label>
          <input
            id="taiKhoan"
            name="taiKhoan"
            type="text"
            onChange={formSignup.handleChange}
            value={formSignup.values.taiKhoan}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium " htmlFor="matKhau">
            Mật khẩu
          </label>
          <input
            id="matKhau"
            name="matKhau"
            type="password"
            onChange={formSignup.handleChange}
            value={formSignup.values.matKhau}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.matKhau}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="nhapLaiMatKhau">
            Nhập lại mật khẩu
          </label>
          <input
            id="nhapLaiMatKhau"
            name="nhapLaiMatKhau"
            type="password"
            onChange={formSignup.handleChange}
            value={formSignup.values.nhapLaiMatKhau}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.nhapLaiMatKhau}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="hoTen">
            Họ tên
          </label>
          <input
            id="hoTen"
            name="hoTen"
            type="text"
            onChange={formSignup.handleChange}
            value={formSignup.values.hoTen}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.hoTen}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formSignup.handleChange}
            value={formSignup.values.email}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="soDienThoai">
            Số điện thoại
          </label>
          <input
            id="soDienThoai"
            name="soDienThoai"
            type="text"
            onChange={formSignup.handleChange}
            value={formSignup.values.soDienThoai}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.soDienThoai}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="maNhom">
            Mã nhóm
          </label>
          <input
            id="maNhom"
            name="maNhom"
            type="text"
            onChange={formSignup.handleChange}
            value={formSignup.values.maNhom}
            className="border rounded p-2 w-full"
          />
          <p className="text-red-500 h-3">{formSignup.errors.maNhom}</p>
        </div>
        <button className="bg-blue-500 text-white rounded p-2" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
