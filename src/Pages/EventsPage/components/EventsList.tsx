import SecHeading from "../../../GlobalUI/SecHeading";
import ExpandedSearch from "./ExpandedSearch";

export default function EventsList({ events, expanded, handleExpandedClose }) {
  return (
    <div onClick={handleExpandedClose}>
      <div
        className={
          expanded
            ? "mt-6  mb-2 open-searchbar "
            : "mt-6  mb-2 closed-searchbar"
        }
      >
        <ExpandedSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-evenly sm:max-w-[90vw]">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="border border-1 border-black p-2 m-4  cursor-pointer rounded-lg"
            >
              <img src={event.photos[0]} alt="" className="max-h-[500px]" />
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
