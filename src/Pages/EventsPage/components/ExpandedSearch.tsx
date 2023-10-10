import React, { useState } from "react";
import search from "../../../Images/search.svg";

export default function ExpandedSearch({ handleExpandedClose }) {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    outline: "none",
    width: "auto",
    borderBottom: "1px solid black",
    backgroundColor: "transparent",
    color: date ? "black" : "#808080", // Change color to black if date is entered
  };

  return (
    <div className="fixed top-[25vh] left-[10vw]">
      <div className="flex flex-col items-center justify-center mx-auto mb-4 bg-white custom-box-shadow bg-gradient-to-r from-cyan-500 to-blue-500 border border-1 rounded-[20px]  h-[50vh] w-[80vw] relative">
        <div className="mt-6 mb-2 w-[90vw]  flex justify-center relative ">
          <div className="border border-1 rounded-lg border-black p-2 py-4 sm:py-2 text-lg flex flex-col sm:flex-row gap-8  sm:gap-6 max-w-[80%] bg-white">
            <input
              type="text"
              placeholder="Event Name"
              className="outline-none w-[100px] border-b border-b-1 border-black bg-transparent placeholder-[#808080]"
            />
            <span className="hidden sm:block">|</span>
            <input
              type="text"
              placeholder="City"
              className="outline-none w-[100px] border-b border-b-1 border-black bg-transparent placeholder-[#808080]"
            />
            <span className="hidden sm:block">|</span>

            <input
              type="Date"
              placeholder="Country"
              className="outline-none w-auto border-b border-b-1 border-black bg-transparent "
              style={inputStyle}
              onChange={handleDateChange}
              value={date}
            />
          </div>
        </div>
        <div className=" rounded-full p-2 px-4 mt-2 shadow-md text-white flex w-fit cursor-pointer search-button">
          <p>Search</p>
          <img src={search} alt="" className="w-6  ml-2" />
        </div>
        <div
          className="bg-black text-white rounded-full px-4 py-2 absolute -top-2 -right-2 cursor-pointer ml-2"
          onClick={handleExpandedClose}
        >
          X
        </div>
      </div>
    </div>
  );
}
