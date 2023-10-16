import React from "react";
import useUserChange from "../../../Firebase/useUserChange";
import { events } from "../../../Data/eventsData";
import MyEventList from "../../MyDashboard/components/MyEventList";

export default function MyFavorites() {
  const { signedUser } = useUserChange();

  const favs = signedUser?.favorites;

  const myFavEvents = events.filter((event) =>
    favs?.includes(String(event.id))
  );

  return (
    <div>
      <div>
        <MyEventList
          events={myFavEvents}
          emptyText=" You haven't favorited any event yet"
          css="flex-col"
          orgView={false}
        />
      </div>
    </div>
  );
}
