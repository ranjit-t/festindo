import React, { useEffect, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import useUserChange from "../../Firebase/useUserChange";
import ProfileMenu from "./components/ProfileMenu";
import ProfileSettings from "./components/ProfileSettings";
import { useNavigate } from "react-router-dom";
import MyTickets from "./components/MyTickets";
import MyFavorites from "./components/MyFavorites";

export default function Profile() {
  const { signedUser, userLoading } = useUserChange();

  const [menuNum, setMenuNum] = useState(3);

  const navigate = useNavigate();

  if (userLoading) {
    <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>;
  } else if (signedUser === null) {
    return (
      <div className="text-center mt-16">
        Please,{" "}
        <button className="font-bold" onClick={() => navigate("/login")}>
          Login
        </button>{" "}
        to access your profile
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-[90vw] sm:w-[60vw] mx-auto items-center">
        {/* <Heading css="">Profile</Heading> */}
        <div className="flex flex-col items-center">
          <ProfileMenu menuNum={menuNum} setMenuNum={setMenuNum} />
        </div>
        {menuNum === 1 && <MyTickets />}
        {menuNum === 2 && <MyFavorites />}
        {menuNum === 3 && <ProfileSettings />}
      </div>
    );
  }
}
