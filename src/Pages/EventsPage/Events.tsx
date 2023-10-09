import React, { useState } from "react";
import Heading from "../../GlobalUI/Heading";
import { events } from "../../Data/eventsData";
import EventsList from "./components/EventsList";
import TriggerSearch from "./components/TriggerSearch";

export default function Events() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleSearchClick = () => {
    setExpanded(true);
  };

  const handleExpandedClose = () => {
    setExpanded(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Heading css="">Events</Heading>
      <TriggerSearch
        expanded={expanded}
        handleSearchClick={handleSearchClick}
      />
      <EventsList
        events={events}
        expanded={expanded}
        handleExpandedClose={handleExpandedClose}
        handleExpandedClose={handleExpandedClose}
      />
    </div>
  );
}
