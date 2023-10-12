import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import closed from "../Images/closedburger.svg";
import MobileNavBar from "./MobileNavBar";
import OnlyDesktop from "../GlobalUI/OnlyDesktop";

import eventStore from "../Store/eventStore";
import LogoutButton from "../GlobalUI/LogoutButton";
import SelectLabels from "../GlobalUI/SelectLabels";

export default function PageHeader({
  isOrg,
  isConnected,
  setPageDelay,
}: PageHeaderProps) {
  //
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const { country, changeCountry } = eventStore();

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
          <OnlyDesktop css="flex gap-4 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            {!isConnected && <NavLink to="/login">Login</NavLink>}
            {!isConnected && <NavLink to="/signup">Signup</NavLink>}
            {isConnected && <NavLink to="/profile">Profile</NavLink>}
            {isOrg && <NavLink to="/event-management">Management</NavLink>}
            {isConnected && <LogoutButton setPageDelay={setPageDelay} />}
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
        {burgerOpen && (
          <MobileNavBar
            burgerOpen={burgerOpen}
            setBurgerOpen={setBurgerOpen}
            isOrg={isOrg}
            isConnected={isConnected}
            setPageDelay={setPageDelay}
          />
        )}
      </div>
      <div className="flex justify-end">
        <SelectLabels />
        {/* <select
          onChange={(e) => {
            changeCountry(e.target.value);
          }}
          value={country}
          className="country-text outline-none  text-md"
        >
          <option value="" className="text-red-600" disabled>
            Country
          </option>
          <option value="France">France</option>
          <option value="USA">USA</option>
        </select> */}
      </div>
    </div>
  );
}

type PageHeaderProps = {
  isOrg: boolean;
  isConnected: boolean;
  setPageDelay: CustomDispatch<boolean>;
};
