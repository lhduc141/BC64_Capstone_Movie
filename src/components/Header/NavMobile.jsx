import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "./data";
import UserNavLogin from "./UserNavLogin";
import UserNavLogOut from "./UserNavLogOut";

const NavMobile = ({ show, setShow, infoUser }) => {
  if (!show) return;

  const renderUserNav = () => {
    return infoUser ? <UserNavLogin /> : <UserNavLogOut />;
  };
  return (
    <div className="md:hidden flex flex-col  absolute right-0 top-0 bg-white p-4 gap-5 rounded-md">
      {/* button close */}
      <button
        className="text-red-400 font-bold  rounded-3xl  hover:text-red-600"
        onClick={() => setShow(false)}
      >
        x
      </button>
      {navData.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          exact={item.exact}
          className={`text-black font-medium text-xl ${item.className}`}
        >
          {item.text}
        </NavLink>
      ))}
      <div>{renderUserNav()}</div>
    </div>
  );
};

export default NavMobile;
