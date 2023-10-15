import React from "react";
import Heading from "../../GlobalUI/Heading";
import useUserChange from "../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";

export default function MyDashboard() {
  const { signedUser, userLoading } = useUserChange();
  const navigate = useNavigate();

  if (userLoading) {
    <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>;
  } else if (signedUser === null) {
    return (
      <div className="text-center text-lg mt-16">
        <p>Please, Login to access this page</p>
        <button className="font-bold mt-2" onClick={() => navigate("/login")}>
          Click Here to Login
        </button>
      </div>
    );
  } else if (!signedUser.isOrganiser) {
    return (
      <div className="text-center text-lg mt-16">
        <p>Your are not an organiser yet,</p>
        <p>Please, Go to Profile Settings to modify!</p>
        <button className="font-bold mt-2" onClick={() => navigate("/profile")}>
          Profile Settings
        </button>
      </div>
    );
  }

  return (
    <div>
      <Heading css="">Event Management</Heading>
    </div>
  );
}
