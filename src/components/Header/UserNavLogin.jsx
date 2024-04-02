import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";

const UserNavLogin = () => {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userReducer); //get infoUser
  return (
    <div className="space-x-3">
      <span className="text-white text-xl">{infoUser.hoTen}</span>
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
        className="bg-red-400 text-white p-2 rounded"
      >
        Log out
      </button>
    </div>
  );
};

export default UserNavLogin;
