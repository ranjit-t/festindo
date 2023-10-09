import search from "../../../Images/search.svg";

export default function ExpandedSearch() {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="mt-6 mb-2 w-[90vw]  flex justify-center">
        <div className="border border-1 rounded-lg border-black p-2  text-lg flex">
          <input
            type="text"
            placeholder="Event Name"
            className="w-fit outline-none w-[140px]"
          />
          <input
            type="text"
            placeholder="City"
            className="w-fit outline-none w-[140px]"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-fit outline-none w-[140px]"
          />
        </div>
      </div>
      <div className="border border-1 rounded-full bg-black border-black p-2 shadow-md text-white flex w-fit cursor-pointer">
        <p>Search</p>
        <img src={search} alt="" className="w-6  " />
      </div>
    </div>
  );
}
