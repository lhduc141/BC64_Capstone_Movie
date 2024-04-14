import React from "react";
import { useNavigate } from "react-router-dom";

const UserNavLogOut = () => {
  const navigate = useNavigate();

  return (
    <div className="md:space-x-1 align-middle md:border px-2 flex flex-col md:flex-row items-center gap-4 border-t">
      <span className="hidden md:inline-block text-gray-500 text-[1.5rem] px-2">
        <i class="fa-regular fa-address-card"></i>
      </span>
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
        className="text-gray-500 xl:p-2 rounded md:border-r font-bold hover:text-red-500 text-sm"
      >
        Đăng Nhập
      </button>
      <button
        onClick={() => {
          navigate("/auth/signup");
        }}
        className="text-gray-500 md:p-2 rounded font-bold hover:text-red-500 text-sm"
      >
        <span className="mx-2">Đăng Ký</span>
      </button>
    </div>
  );
};

export default UserNavLogOut;
