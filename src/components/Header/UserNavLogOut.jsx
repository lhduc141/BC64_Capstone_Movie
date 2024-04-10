import React from "react";
import { useNavigate } from "react-router-dom";

const UserNavLogOut = () => {
  const navigate = useNavigate();

  return (
    <div className="space-x-3 align-middle border px-2">
      <span className="text-gray-500 text-[1.5rem] px-2">
        <i class="fa-regular fa-address-card"></i>
      </span>
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
        className="text-gray-500 p-2 rounded border-r font-bold hover:text-red-500"
      >
        Đăng Nhập
      </button>
      <button
        onClick={() => {
          navigate("/auth/signup");
        }}
        className=" text-gray-500 p-2 font-bold   hover:text-red-500"
      >
        <span className="mx-2">Đăng Ký</span>
      </button>
    </div>
  );
};

export default UserNavLogOut;
