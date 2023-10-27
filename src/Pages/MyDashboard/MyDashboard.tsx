import React from "react";
import Heading from "../../GlobalUI/Heading";
import useUserChange from "../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";
import { events } from "../../Data/eventsData";
import MyEventList from "./components/MyEventList";
import DashboardUserDisplay from "./components/DashboardUserDisplay";

export default function MyDashboard() {
  const { signedUser, userLoading } = useUserChange();
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in "yyyy-MM-dd" format
  const upcomingEvents = events.filter(
    (event) => event.date && event.date >= currentDate
  );
  const pastEvents = events.filter(
    (event) => event.date && event.date < currentDate
  );

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
      <DashboardUserDisplay />
      <div className="flex flex-col items-start my-4">
        <Heading css="text-xl font-bold underline underline-offset-4 mt-6 ml-2">
          Upcoming Events
        </Heading>
        <MyEventList
          events={upcomingEvents}
          emptyText=" You haven't organised any events yet!"
          orgView={true}
        />
      </div>
      <hr />
      <div className="flex flex-col items-start my-4 text-gray-500">
        <Heading css="text-xl font-bold underline underline-offset-4 mt-6 ml-2 text-black">
          Past Events
        </Heading>
        <MyEventList
          events={pastEvents}
          emptyText=" You don't have any past events yet!"
          orgView={true}
        />
      </div>
      <hr />
    </div>
  );
}
