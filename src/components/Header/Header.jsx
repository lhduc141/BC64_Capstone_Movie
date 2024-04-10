import React from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink,useNavigate } from "react-router-dom";

const Header = () => {
  const headerMenu = "mx-3 nav-item";
 
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
          <div className="container ">
            <img src=" " alt="" />
            <span>TICKET MOVIE</span>
          </div>
        </NavLink>
        <NavLink to="" className="text-white font-medium text-2xl">
          <div className="container ">

            <span className="text-base font-medium leading-relaxed tracking-wide">Lịch chiếu</span>
          </div>
        </NavLink>
        <NavLink className="text-white font-medium text-2xl">
          <div className="container ">
            <span className="text-base font-medium leading-relaxed tracking-wide">Cụm rạp</span>
          </div>
        </NavLink>
        <NavLink to="/TinTuc"  className={(param) => {
                return param.isActive ? `${headerMenu} active` : headerMenu;
              }}
              onClick={() => {
                document.getElementById("quickSearch").scrollIntoView();
              }}
               >
          <div className="text-white font-medium text-2xl">
            <span>Tin tức </span>
          </div>
        </NavLink>
        <NavLink to=" " className="text-white font-medium text-2xl">
          <div className="container ">
            <span className="text-base font-medium leading-relaxed tracking-wide">Ứng dụng</span>
          </div>
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
