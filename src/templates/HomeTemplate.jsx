import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Footer } from "antd/es/layout/layout";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeTemplate;
