// import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/userReducer/userThunk";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch(); //hook dispatch
  const navigate = useNavigate();
  const formLogin = useFormik({
    //formik fast check validation
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // check validation before dispatch
    onSubmit: (value) => {
      const navigateCus = () => {
        navigate("/");
      };
      dispatch(loginThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Vui lòng nhập tài khoản")
        .min(4, "Tài khoản ít nhất 4 chữ"),
      matKhau: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(4, "Mật khẩu ít nhất 4 chữ"),
    }),
  });

  return (
    <div className="">
      <form
        action=""
        className="border p-3 rounded-md space-y-3"
        onSubmit={formLogin.handleSubmit}
      >
        <h3 className="text-2xl font-medium">Form đăng nhập</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="taiKhoan">
            Tài khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
            value={formLogin.values.taiKhoan}
          />
          <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="matKhau">
            Mật khẩu
          </label>
          <input
            type="password"
            name="matKhau"
            id="matKhau"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
            value={formLogin.values.matKhau}
          />
        </div>
        <p className="text-red-500 h-3">{formLogin.errors.matKhau}</p>

        <button
          type="submit"
          className="bg-green-500 text-white rounded p-2 mt-2"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
