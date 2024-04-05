import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ScreenPage = () => {
  const { maLichChieu } = useParams();
  const { infoUser } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!infoUser) {
      message.error("Vui lÒng đăng nhập để được đặt vé");
      navigate("/auth/login");
    }
  }, []);

  return <div>ScreenPage</div>;
};

export default ScreenPage;
