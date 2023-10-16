import React from "react";
import france from "../../../Images/paris.jpeg";
import uk from "../../../Images/uk.avif";
import usa from "../../../Images/usa.avif";

import { useNavigate } from "react-router-dom";
import eventStore from "../../../Store/eventStore";

export default function CountriesList() {
  const { changeCountry } = eventStore();

  const navigate = useNavigate();

  const handleCountry = (country: string) => {
    changeCountry(country);
    navigate("/events");
    // location.href = "/events";
  };

  return (
    <div className="mt-4 flex gap-8 overflow-x-scroll px-[5vw] sm:px-[10vw] max-w-[100vw]  sm:max-w-[90vw] countries-container ">
      <div
        className="flex flex-col items-center  font-bold text-lg border border-1 border-black rounded-lg p-2 cursor-pointer min-w-[300px] overflow-hidden"
        onClick={() => {
          handleCountry("France");
        }}
      >
        <img
          src={france}
          alt="France"
          className="w-[300px] h-[200px] object-cover transition-transform hover:scale-110"
          width="300px"
        />
        <p className="mt-3">France</p>
      </div>
      <div
        className="flex flex-col items-center  font-bold text-lg border border-1 border-black rounded-lg p-2 cursor-pointer min-w-[300px] overflow-hidden"
        onClick={() => {
          handleCountry("UK");
        }}
      >
        <img
          src={uk}
          alt="UK"
          className="w-[300px] h-[200px] object-cover transition-transform hover:scale-110"
        />
        <p className="mt-3">UK</p>
      </div>
      <div
        className="flex flex-col items-center  font-bold text-lg border border-1 border-black rounded-lg p-2 cursor-pointer min-w-[300px] overflow-hidden"
        onClick={() => {
          handleCountry("USA");
        }}
      >
        <img
          src={usa}
          alt="USA"
          className="w-[300px] h-[200px] object-cover transition-transform hover:scale-110"
        />
        <p className="mt-3">USA</p>
      </div>
    </div>
  );
}
