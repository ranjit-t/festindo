import React from "react";
import { NavLink } from "react-router-dom";
import open from "../Images/openburger.svg";
import "../App.css";
import LogoutButton from "../GlobalUI/LogoutButton";

export default function MobileNavBar({
  burgerOpen,
  setBurgerOpen,
  isOrg,
  isConnected,
  setPageDelay,
}: MobileNavBarProps) {
  const toggleMenu = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 bg-black text-white w-screen h-screen block open-navBar z-50">
      <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen text-2xl">
        <img
          src={open}
          alt=""
          className="w-8 absolute top-[28px] right-[2.5vw] cursor-pointer "
          onClick={toggleMenu}
        />
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/events" onClick={toggleMenu}>
          Events
        </NavLink>
        {isOrg && (
          <NavLink to="/event-management" onClick={toggleMenu}>
            Event Management
          </NavLink>
        )}
        {isConnected && (
          <NavLink to="/profile" onClick={toggleMenu}>
            Profile
          </NavLink>
        )}
        {isConnected && <LogoutButton setPageDelay={setPageDelay} />}
        {!isConnected && (
          <NavLink to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
        )}
        {!isConnected && (
          <NavLink to="/signup" onClick={toggleMenu}>
            Signup
          </NavLink>
        )}
      </div>
    </div>
  );
}

interface MobileNavBarProps {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOrg: boolean;
  isConnected: boolean;
  setPageDelay: CustomDispatch<boolean>;
}
