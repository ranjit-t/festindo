import React from "react";
import SecHeading from "../../../GlobalUI/SecHeading";

export default function EventsList({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  justify-center mt-4">
      {events.map((event) => {
        return (
          <div
            key={event.id}
            className="border border-1 border-black p-2 m-4 max-w-[520px] cursor-pointer rounded-lg"
          >
            <img src={event.photos[0]} alt="" className="w-[500px]" />
            <div className="p-2 flex flex-col gap-2">
              <SecHeading>{event.title}</SecHeading>
              <p className="truncate max-w-[90%] text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
