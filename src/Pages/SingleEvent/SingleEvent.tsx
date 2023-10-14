import React from "react";
import { events } from "../../Data/eventsData";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../GlobalUI/Heading";
import EventPara from "../../GlobalUI/EventPara";
import ScrollToTop from "../../Hooks/ScrollToTop";

export default function SingleEvent() {
  const { pageId } = useParams();
  const event = events.find((event) => event.id === parseInt(pageId || "0"));
  const navigate = useNavigate();

  ScrollToTop();

  return (
    <div className="flex flex-col items-center gap-6 w-[90vw] sm:w-[75vw] md:w-[60vw] mx-auto">
      <img src={event?.photos?.[0]} alt="" className="max-h-[50vh]" />
      <Heading css="">{event?.title}</Heading>

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
              onClick={() => navigate(`/organizer/${event?.organizerId}`)}
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
            head={"Price"}
            content={event?.ticketPrice}
            css="text-lg"
          />
        </div>
      </div>
    </div>
  );
}

function openGoogleMaps(address: string) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  window.open(googleMapsUrl, "_blank");
}
