import React from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const renderUserNav = () => {
    if (infoUser) {
      //if logined => Name & logout button
      return <UserNavLogin />;
    } else {
      // If not login => login/register button
      return <UserNavLogOut />;
    }
  };
  return (
    <div className="bg-gray-900 py-3 sticky top-0 z-40">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to={"/"} className="text-white font-medium text-2xl">
          BC 64
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
