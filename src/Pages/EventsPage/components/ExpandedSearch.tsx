import React, { useState } from "react";
import search from "../../../Images/search.svg";
import Heading from "../../../GlobalUI/Heading";
import cancel from "../../../Images/cancel.svg";

export default function ExpandedSearch({
  setExpanded,
}: {
  setExpanded: CustomDispatch<boolean>;
}) {
  const [searchForm, setSearchForm] = useState({
    date: "",
    title: "",
    city: "",
  });

  const handleInputChange = (
    e: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    const inputValue = (e.target as HTMLInputElement).value; // Use type assertion
    setSearchForm((prev) => ({ ...prev, [name]: inputValue }));
    console.log(searchForm);
  };

  const inputStyle = {
    outline: "none",
    width: "auto",
    borderBottom: "1px solid black",
    backgroundColor: "transparent",
    color: searchForm.date ? "black" : "#808080", // Change color to black if date is entered
  };

  return (
    <div className="fixed top-[25vh] left-[5vw] lg:left-[20vw] z-50">
      <div className="flex flex-col items-center justify-center mx-auto mb-4 bg-white custom-box-shadow  border border-1 rounded-[20px]  h-[60vh] sm:h-[50vh] w-[90vw] lg:w-[60vw] relative">
        <Heading css="mb-0 sm:mb-4 text-lg sm:text-xl">Search An Event</Heading>
        <div className="mt-6 mb-2 w-[90vw]  flex justify-center relative ">
          <div className="border border-1 rounded-lg border-black p-8 sm:p-4 text-lg flex flex-col sm:flex-row gap-10  sm:gap-6 max-w-[80%] bg-white">
            <input
              type="text"
              placeholder="Event Name"
              className="outline-none w-[100px] border-b border-b-1 border-black bg-transparent placeholder-[#808080]"
              onChange={(e) => {
                handleInputChange(e, "title");
              }}
              value={searchForm.title}
            />
            <span className="hidden sm:block">|</span>
            <input
              type="text"
              placeholder="City"
              className="outline-none w-[100px] border-b border-b-1 border-black bg-transparent placeholder-[#808080]"
              onChange={(e) => {
                handleInputChange(e, "city");
              }}
              value={searchForm.city}
            />
            <span className="hidden sm:block">|</span>

            <input
              type="Date"
              placeholder="Country"
              className="outline-none w-auto border-b border-b-1 border-black bg-transparent "
              style={inputStyle}
              onChange={(e) => {
                handleInputChange(e, "date");
              }}
              value={searchForm.date}
            />
          </div>
        </div>
        <div className=" rounded-full p-2 px-4 mt-2 shadow-md text-white flex w-fit cursor-pointer search-button">
          <p>Search</p>
          <img src={search} alt="" className="w-6  ml-2" />
        </div>
        <div
          className=" bg-white rounded-full absolute -top-1 -right-1 cursor-pointer ml-2"
          onClick={() => setExpanded(false)}
        >
          <img src={cancel} alt="X" className="w-8" />
        </div>
      </div>
    </div>
  );
}
