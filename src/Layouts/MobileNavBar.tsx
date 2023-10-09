import React from "react";
import { NavLink } from "react-router-dom";
import open from "../Images/openburger.svg";
import "../App.css";

export default function MobileNavBar({
  burgerOpen,
  setBurgerOpen,
}: MobileNavBarProps) {
  const toggleMenu = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <div
      className={
        burgerOpen
          ? "absolute top-0 left-0 bg-black text-white w-screen h-screen block open-navBar"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-2 justify-center items-center w-screen h-screen text-2xl">
        <img
          src={open}
          alt=""
          className="w-8 absolute top-6 right-[2.5vw] cursor-pointer "
          onClick={toggleMenu}
        />
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/events" onClick={toggleMenu}>
          Events
        </NavLink>
      </div>
    </div>
  );
}

interface MobileNavBarProps {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
