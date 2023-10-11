import React, { useState } from "react";
import SecHeading from "../../../GlobalUI/SecHeading";
import EventsType from "../../../Types/EventsType";

export default function EventItem({ event }: { event: EventsType }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="border border-1 border-black p-2 m-4  cursor-pointer rounded-lg max-w-[500px] ">
      <div className="relative max-h-[500px]">
        <img src={event.photos[0]} alt="" className="hidden" onLoad={onLoad} />
        {imageLoaded ? (
          <img
            src={event.photos[0]}
            alt=""
            className="h-[250px] lg:h-[300px] w-full object-cover"
          />
        ) : (
          <div className="h-[250px] lg:h-[300px] animate-pulse w-full bg-gray-100"></div>
        )}
      </div>

      <div className="p-2 flex flex-col gap-2">
        <SecHeading css="">{event.title}</SecHeading>
        <p className="truncate max-w-[90%] text-gray-600">
          {event.description}
        </p>
      </div>
    </div>
  );
}