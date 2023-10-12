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

  const [byCity, setByCity] = useState("");

  useEffect(() => {
    let filter = events
      .filter((event) => event.country === selectedCountry)
      .filter((event: EventsType) =>
        event.title.toLowerCase().includes(byCity.toLowerCase())
      );
    setfilteredEvents(country === "" ? events : filter);
  }, [country, byCity]);

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
      <div className={filteredEvents.length === 0 ? "w-[75vw] mx-auto" : ""}>
        <TriggerSearch
          expanded={expanded}
          setExpanded={setExpanded}
          setByCity={setByCity}
        />
      </div>
      {filteredEvents.length === 0 && (
        <div className="flex justify-center w-[100vw] ">
          <p className="mt-16">Sorry, Nothing Found</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2  sm:max-w-[80vw] ">
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
