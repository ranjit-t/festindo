import React from "react";
import Heading from "../../GlobalUI/Heading";
import { events } from "../../Data/eventsData";
import EventsList from "./components/EventsList";

export default function Events() {
  return (
    <div className="flex flex-col items-center">
      <Heading css="">Events</Heading>
      <EventsList events={events} />
    </div>
  );
}
