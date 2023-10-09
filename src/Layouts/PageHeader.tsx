import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import closed from "../Images/closedburger.svg";
import MobileNavBar from "./MobileNavBar";
import OnlyDesktop from "../GlobalUI/OnlyDesktop";

export default function PageHeader() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  return (
    <div className="w-[95vw] mx-auto mt-2">
      <div className="flex justify-between ">
        <div
          className="flex flex-col justify-center cursor-pointer"
          onClick={() => {
            location.href = "/";
          }}
        >
          <button>
            <img src={logo1} alt="FESTINDO" className="w-40" />
          </button>
          <p className="text-[14px]">Celebrating Indian Events</p>
        </div>
        <div className="flex gap-4 items-center">
          <OnlyDesktop css="flex gap-2 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
          </OnlyDesktop>
          <div>
            <img
              src={closed}
              alt="FESTINDO"
              className="w-8 cursor-pointer"
              onClick={() => {
                setBurgerOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
        <MobileNavBar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      </div>
      <div className="flex justify-end">
        <select name="" id="">
          <option value="france">France</option>
          <option value="france">USA</option>
        </select>
      </div>
    </div>
  );
}
