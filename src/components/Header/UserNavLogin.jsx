import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";

const UserNavLogin = () => {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userReducer); //get infoUser
  return (
    <div className="space-x-3 flex items-center">
      <span className="text-gray-500 font-medium text-xl flex items-center  rounded-full border border-black border-2">
        <span className="border rounded-full h-8 w-8 mr-1 text-gray-500 flex justify-center items-center border-black border-*-3">
          <i className="fa-solid fa-user-tie"></i>
        </span>
        <span className="mr-4">{infoUser.hoTen}</span>
      </span>

      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
        className="bg-red-400 text-white p-1.5 rounded-3xl mx-4 px-4 hover:bg-red-600"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
      </button>
    </div>
  );
};

export default UserNavLogin;
