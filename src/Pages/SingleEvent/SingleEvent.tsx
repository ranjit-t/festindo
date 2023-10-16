import React, { useEffect, useState } from "react";
import { events } from "../../Data/eventsData";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../GlobalUI/Heading";
import EventPara from "../../GlobalUI/EventPara";
import ScrollToTop from "../../Hooks/ScrollToTop";
import useUserChange from "../../Firebase/useUserChange";
import { formatDateWithMonthName } from "../../Utils/formatDatewithMonthName";
import emptyHeart from "../../Images/emptyHeart.svg";
import fullHeart from "../../Images/fullHeart.svg";

import useHandleFav from "../../Hooks/useHandleFav";

export default function SingleEvent() {
  const { pageId } = useParams();
  const event = events.find((event) => event.id === parseInt(pageId || "0"));
  const navigate = useNavigate();

  const { signedUser, userLoading } = useUserChange();

  const [isFavorite, setIsFavorite] = useState<boolean>(true);

  const { handleFav } = useHandleFav({
    setIsFavorite,
  });

  useEffect(() => {
    if (pageId) {
      let result = signedUser?.favorites.includes(pageId);
      setIsFavorite(result ? result : false);
    }
  }, [signedUser, pageId]);

  ScrollToTop();

  if (userLoading) {
    <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>;
  } else if (signedUser === null) {
    return (
      <div className="text-center text-lg mt-16">
        <p>Please, Login to access this event</p>
        <button className="font-bold mt-2" onClick={() => navigate("/login")}>
          Click Here to Login
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-6 w-[90vw] sm:w-[75vw] md:w-[60vw] mx-auto">
        <img src={event?.photos?.[0]} alt="" className="max-h-[50vh]" />
        <Heading css="w-screen">{event?.title}</Heading>

        <EventPara
          head={"Description"}
          content={event?.description}
          css="hidden md:block text-justify"
        />
        <div className="flex justify-center w-[90%] lg:w-[60%]">
          <div className="flex flex-col gap-4 items-start  ">
            <EventPara
              head={"Description"}
              content={event?.description}
              css=" block md:hidden text-justify"
            />
            <EventPara
              head={"Address"}
              content={event?.address}
              css="cursor-pointer specialFont"
              onClick={() => {
                openGoogleMaps(event?.address || "");
              }}
            />
            <EventPara
              head={"Category"}
              content={event?.category || "(Not Mentioned)"}
            />

            <div className="flex items-center  my-4">
              <strong className="font-bold text-lg">Organizer : </strong>
              <div
                className="flex items-center gap-2 ml-2 border border-1 p-2 cursor-pointer rounded-lg shadow-md specialFont"
                onClick={() => navigate(`/user/${event?.organizerId}`)}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/972/776/small/people-icon-sign-symbol-design-free-png.png" //to be changed
                  alt=""
                  className="w-10 "
                />
                <p className="">{event?.organizerName}</p>
              </div>
            </div>
            <EventPara
              head={"Date"}
              content={formatDateWithMonthName(event?.date || "")}
              css=" text-justify"
            />
            <EventPara
              head={"Timings"}
              content={`${event?.startTime} - ${event?.endTime}`}
              css=" text-justify"
            />
            <EventPara
              head={"Price"}
              content={event?.ticketPrice}
              css="text-lg"
            />

            {isFavorite ? (
              <div
                className="w-8 cursor-pointer flex justify-center items-center gap-2 w-full border p-2 mt-2 shadow-md rounded-lg active:shadow-lg"
                onClick={() => {
                  pageId && handleFav(pageId, "remove"); // Use "remove" as the action
                }}
              >
                <p>Remove from Favorites</p>{" "}
                <img src={fullHeart} alt="" className="w-8" />
              </div>
            ) : (
              <div
                className="w-8 cursor-pointer flex justify-center items-center gap-2 w-full border p-2 mt-2 shadow-md rounded-lg active:shadow-lg"
                onClick={() => {
                  pageId && handleFav(pageId, "add");
                }}
              >
                <p>Add to Favorites</p>{" "}
                <img src={emptyHeart} alt="" className="w-8" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function openGoogleMaps(address: string) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  window.open(googleMapsUrl, "_blank");
}
