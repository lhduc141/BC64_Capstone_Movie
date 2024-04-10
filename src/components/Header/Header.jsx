import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink } from "react-router-dom";

const Header = () => {
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
      className={`bg-white py-3 sticky top-0 z-40 ${
        isScrolled ? "bg-opacity-70" : ""
      }`}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to={"/"} className="text-black font-medium text-2xl">
          <i class="fa fa-theater-masks"></i> BC Cinema
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
