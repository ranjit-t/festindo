import React from "react";
import search from "../../../Images/search.svg";

export default function TriggerSearch({ expanded, handleSearchClick }) {
  return (
    <div className={!expanded ? "open-trigger" : "closed-trigger "}>
      <div className="mt-6 mb-2 w-[90vw] mr-0 sm:mr-[2.5vw] flex justify-center sm:justify-end">
        <div className="border border-1 rounded-lg border-black pl-2 pr-1 py-1 max-w-[220px] text-lg flex">
          <input
            type="text"
            placeholder="search an event"
            className="w-fit outline-none w-[140px]"
            onFocus={handleSearchClick}
          />
          <div className="border border-1 rounded-full bg-black border-black p-1 shadow-md">
            <img src={search} alt="" className="w-6 cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}
