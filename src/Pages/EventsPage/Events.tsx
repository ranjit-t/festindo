import React, { useState } from "react";
import Heading from "../../GlobalUI/Heading";
import { events } from "../../Data/eventsData";
import EventsList from "./components/EventsList";
// import TriggerSearch from "./components/TriggerSearch";
import filterEvents from "../../Store/filterEvents";
import eventStore from "../../Store/eventStore";

export default function Events() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { country } = eventStore();
  const filteredEvents = filterEvents(country, events);

  return (
    <div className="flex flex-col items-center">
      <Heading css="">Events</Heading>
      {/* <TriggerSearch expanded={expanded} setExpanded={setExpanded} /> */}
      <EventsList
        events={filteredEvents}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
}
