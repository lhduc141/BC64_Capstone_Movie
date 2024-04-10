import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const headerMenu = "mx-3 nav-item";

  const { infoUser } = useSelector((state) => state.userReducer);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if scroll position is greater than 0
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderUserNav = () => {
    if (infoUser) {
      //if logged in => Name & logout button
      return <UserNavLogin />;
    } else {
      // If not logged in => login/register button
      return <UserNavLogOut />;
    }
  };

  return (
    <div
      className={`bg-white py-3 sticky top-0 z-40 shadow-lg ${
        isScrolled ? "bg-opacity-70" : ""
      }`}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to={"/"} className="text-black font-medium text-2xl">
          <i class="fa fa-theater-masks"></i> BC Cinema
        </NavLink>

        <div className="flex">
          <NavLink to="" className="text-black font-medium text-2xl">
            <div className="container ">
              <span className="text-base font-medium leading-relaxed tracking-wide">
                Lịch chiếu
              </span>
            </div>
          </NavLink>
          <NavLink className="text-black font-medium text-2xl">
            <div className="container ">
              <span className="text-base font-medium leading-relaxed tracking-wide">
                Cụm rạp
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/TinTuc"
            className={(param) => {
              return param.isActive ? `${headerMenu} active` : headerMenu;
            }}
            onClick={() => {
              document.getElementById("quickSearch").scrollIntoView();
            }}
          >
            <div className="text-black font-medium text-2xl">
              <span className="text-base font-medium leading-relaxed tracking-wide">
                Tin tức{" "}
              </span>
            </div>
          </NavLink>
          <NavLink to=" " className="text-black font-medium text-2xl">
            <div className="container ">
              <span className="text-base font-medium leading-relaxed tracking-wide">
                Ứng dụng
              </span>
            </div>
          </NavLink>
        </div>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
