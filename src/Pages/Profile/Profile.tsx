import React, { useEffect, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import useUserChange from "../../Firebase/useUserChange";
import ProfileMenu from "./components/ProfileMenu";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import ProfileSettings from "./components/ProfileSettings";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let signedUser = useUserChange();

  const [menuNum, setMenuNum] = useState(1);

  const navigate = useNavigate();

  if (signedUser === null) {
    return (
      <div className="text-center mt-16">
        Please,{" "}
        <button className="font-bold" onClick={() => navigate("/login")}>
          Login
        </button>{" "}
        to access your profile
      </div>
    );
  }
  return (
    <div className="flex flex-col w-[90vw] sm:w-[60vw] mx-auto items-center">
      <Heading css="">Profile</Heading>
      <div className="flex flex-col items-center">
        <ProfileMenu menuNum={menuNum} setMenuNum={setMenuNum} />
      </div>
      {menuNum === 1 && <UpcomingEvents />}
      {menuNum === 2 && <PastEvents />}
      {menuNum === 3 && <ProfileSettings />}
    </div>
  );
}
