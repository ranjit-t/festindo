import React from "react";
import Heading from "../../GlobalUI/Heading";
import useUserChange from "../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";
import { events } from "../../Data/eventsData";
import MyEventList from "./components/MyEventList";

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
    <div className="w-[90%] lg:w-[70%] mx-auto">
      <div className="flex  justify-end items-center gap-4 mt-8 lg:mt-0">
        <div>
          <p className="font-bold">Hello {signedUser?.fullName}!</p>
          <p className="text-gray-600 my-2">How are you doing today ?</p>
          <hr />
        </div>
        <img
          src={signedUser?.profilePhoto}
          alt=""
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="flex flex-col items-start mb-4">
        <Heading css="text-xl mt-6 ml-2">My Events</Heading>
        <MyEventList />
      </div>
      <hr />
    </div>
  );
}
