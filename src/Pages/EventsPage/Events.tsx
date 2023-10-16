import React, { useEffect, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import EventsList from "./components/EventsList";

export default function Events() {
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Heading css="">Events</Heading>
      <EventsList expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}
