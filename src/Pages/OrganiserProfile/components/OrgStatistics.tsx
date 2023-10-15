import React from "react";
import { events } from "../../../Data/eventsData";
export default function OrgStatistics({
  organiser,
}: {
  organiser: UserDetailsType | null;
}) {
  const eventsOrganized = events.filter(
    (event) => event?.organizerId === organiser?.uid
  );

  return (
    <div className="flex  gap-6 shadow-md border p-2 px-4">
      {organiser?.isOrganiser && (
        <div className="flex flex-col items-center">
          <p>{eventsOrganized.length}</p>
          <p>Events</p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <p>{organiser?.followers.length || "0"}</p>
        <p>{organiser?.followers.length === 1 ? "Followor" : "Followors"}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>{organiser?.following.length || "0"}</p>
        <p>Following</p>
      </div>
    </div>
  );
}
