import React from "react";
import useUserChange from "../../../Firebase/useUserChange";
import { events } from "../../../Data/eventsData";
import EventsType from "../../../Types/EventsType";
import mappin from "../../../Images/mappin.svg";
export default function MyEventList() {
  const { signedUser, userLoading } = useUserChange();
  const myEvents: EventsType[] = events.filter(
    (event: EventsType) => event.organizerId === signedUser?.uid
  );

  return (
    <>
      {myEvents.length === 0 && (
        <div className=" mt-4 mx-auto">
          Sorry, You haven't organised any event sorry!
        </div>
      )}
      <div className="flex w-full mt-4 overflow-scroll myevents">
        {myEvents.map((event) => {
          return (
            <div
              key={event.id}
              className="border p-4 m-2  w-[220px] min-w-[250px] flex flex-col gap-2"
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
