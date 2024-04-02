import Lottie from "lottie-react";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import iconLogin from "../assets/iconLogin.json";
import { useSelector } from "react-redux";

const AuthTemplate = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  //check isLogin
  //useEffect => chạy một lần khi login
  useEffect(() => {
    if (infoUser) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex w-sreen h-screen">
      <div className="w-1/2 h-full">
        <Lottie animationData={iconLogin} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
