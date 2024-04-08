import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import ListChair from "./ListGhe/ListChair";
import { useNavigate, useParams } from "react-router-dom";

const CheckUser = ({ children }) => {
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!infoUser) {
      message.error("Vui lòng đăng nhập để được đặt vé");
      navigate("/auth/login");
    }
  }, [infoUser]);
  return <div>{children}</div>;
};

export default CheckUser;
