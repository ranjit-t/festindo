import React from "react";
import useUserChange from "../../../Firebase/useUserChange";
// import { events } from "../../../Data/eventsData";
import EventsType from "../../../Types/EventsType";
import mappin from "../../../Images/mappin.svg";
import { useNavigate } from "react-router-dom";
export default function MyEventList({
  events,
  emptyText,
  css,
  orgView = false,
}: {
  events: EventsType[];
  emptyText: string;
  css?: string;
  orgView: boolean;
}) {
  const { signedUser, userLoading } = useUserChange();

  let myEvents: EventsType[];
  if (orgView) {
    myEvents = events.filter(
      (event: EventsType) => event.organizerId === signedUser?.uid
    );
  } else {
    myEvents = events;
  }

  const navigate = useNavigate();

  if (userLoading) {
    return (
      <div className="lds-dual-ring flex justify-center w-screen mt-[100px] sm:items-center"></div>
    );
  }
  return (
    <>
      {myEvents.length === 0 && (
        <div className=" mt-4 mx-auto">{emptyText}</div>
      )}
      <div className={`${css} flex w-full mt-4 overflow-scroll myevents`}>
        {myEvents.map((event, idx) => {
          return (
            <div
              key={idx}
              className={
                orgView
                  ? "border p-4 m-2  w-[220px] sm:w-[320px] flex flex-col gap-2 cursor-pointer"
                  : "border p-4 m-2  w-[90vw] sm:max-w-[470px] flex flex-col gap-2 cursor-pointer"
              }
              onClick={() => {
                if (!orgView) {
                  navigate(
                    `/event/${event.country}/${event.title}/${event.id}`
                  );
                }
              }}
            >
              <p className="truncate text-lg font-bold">{event.title}</p>
              <p className="truncate">{event.description}</p>
              <div className="flex gap-2">
                <img src={mappin} alt="City" className="w-4" />
                <span>{event.city}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
