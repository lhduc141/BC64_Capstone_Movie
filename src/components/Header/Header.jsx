import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink, useLocation } from "react-router-dom";
import { navData } from "./data";
import NavMobile from "./NavMobile";

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderUserNav = () => {
    return infoUser ? <UserNavLogin /> : <UserNavLogOut />;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`bg-white py-3 z-20 sticky top-0 shadow-lg backdrop-blur-lg	 ${
        isScrolled ? "bg-opacity-70" : ""
      }`}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <NavLink
          to={"/"}
          className="text-black font-medium text-xl xl:text-2xl"
        >
          <i class="fa fa-theater-masks text-xl"></i>
          <span className="text-xl md:text-2xl">BC Cinema</span>
        </NavLink>
        <div className="hidden md:flex flex-row gap-2 xl:gap-5">
          {navData.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              exact={item.exact}
              className={` text-sm font-medium md:text-xl  ${item.className} ${
                item.to === pathname ? "text-red-400" : "text-black"
              }`}
            >
              {item.text}
            </NavLink>
          ))}
        </div>
        {/* menu button */}
        <button
          className="md:hidden text-black font-medium text-xl xl:text-2xl"
          onClick={toggleMobileMenu}
        >
          <i class="fa fa-bars"></i>
        </button>
        <div className="text-white hidden md:inline-block">
          {renderUserNav()}
        </div>
        <NavMobile
          show={isMobileMenuOpen}
          setShow={setIsMobileMenuOpen}
          infoUser={infoUser}
        />
      </div>
    </div>
  );
};

export default Header;
