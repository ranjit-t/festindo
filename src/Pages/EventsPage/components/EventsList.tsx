import { useEffect, useState } from "react";
import EventsType from "../../../Types/EventsType";
import ExpandedSearch from "./ExpandedSearch";
import TriggerSearch from "./TriggerSearch";
import eventStore from "../../../Store/eventStore";
import { events } from "../../../Data/eventsData";
import EventItem from "./EventItem";

export default function EventsList({ expanded, setExpanded }: EventsListProps) {
  const { country } = eventStore();
  const selectedCountry = country;
  const [filteredEvents, setfilteredEvents] = useState(events);

  useEffect(() => {
    let filter = events.filter((event) => event.country === selectedCountry);

    setfilteredEvents(country === "" ? events : filter);
    // console.log(filteredEvents);
  }, [country]);

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
        {filteredEvents.map((event: EventsType) => {
          return (
            <div key={event.id}>
              <EventItem event={event} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type EventsListProps = {
  expanded: boolean;
  setExpanded: CustomDispatch<boolean>;
};
