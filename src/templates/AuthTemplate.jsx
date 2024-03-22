import Lottie from "lottie-react";
import React from "react";
import { Outlet } from "react-router-dom";
import iconLogin from "../assets/iconLogin.json";

const AuthTemplate = () => {
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
