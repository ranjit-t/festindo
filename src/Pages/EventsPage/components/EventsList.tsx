import { useState } from "react";
import SecHeading from "../../../GlobalUI/SecHeading";
import EventsType from "../../../Types/EventsType";
import ExpandedSearch from "./ExpandedSearch";
import TriggerSearch from "./TriggerSearch";

export default function EventsList({
  events,
  expanded,
  setExpanded,
}: EventsListProps) {
  return (
    <div>
      <div
        className={
          expanded
            ? "mt-6  mb-2 open-searchbar "
            : "mt-6  mb-2 closed-searchbar"
        }
      >
        {expanded && <ExpandedSearch setExpanded={setExpanded} />}
      </div>
      <TriggerSearch expanded={expanded} setExpanded={setExpanded} />
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-between sm:max-w-[90vw]">
        {events.map((event: EventsType) => {
          const [imageLoaded, setImageLoaded] = useState(false);
          const onLoad = () => {
            setImageLoaded(true);
          };

          return (
            <div
              key={event.id}
              className="border border-1 border-black p-2 m-4  cursor-pointer rounded-lg max-w-[500px] "
            >
              <div className="relative max-h-[500px]">
                <img
                  src={event.photos[0]}
                  alt=""
                  className="hidden"
                  onLoad={onLoad}
                />
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
        })}
      </div>
    </div>
  );
}

type EventsListProps = {
  events: EventsType[];
  expanded: boolean;
  setExpanded: CustomDispatch<boolean>;
};
