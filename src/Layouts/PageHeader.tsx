import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import closed from "../Images/closedburger.svg";
import MobileNavBar from "./MobileNavBar";
import OnlyDesktop from "../GlobalUI/OnlyDesktop";
import Logout from "../Utils/Logout";
import eventStore from "../Store/eventStore";

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
            {isConnected ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
            {isOrg && (
              <NavLink
                to="/event-management
            "
              >
                Management
              </NavLink>
            )}
            {isConnected && (
              <button
                onClick={async () => {
                  setPageDelay((prev) => !prev);
                  let status = await Logout();
                  if (status) {
                  } else {
                    console.log("there is a problem logging out");
                  }
                }}
              >
                Logout
              </button>
            )}
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
          />
        )}
      </div>
      <div className="flex justify-end">
        <select
          onChange={(e) => {
            changeCountry(e.target.value);
          }}
          value={country}
          className="country-text"
        >
          <option value="" className="text-red-600">
            Country
          </option>
          <option value="France">France</option>
          <option value="USA">USA</option>
        </select>
      </div>
    </div>
  );
}

type PageHeaderProps = {
  isOrg: boolean;
  isConnected: boolean;
  setPageDelay: CustomDispatch<boolean>;
};
