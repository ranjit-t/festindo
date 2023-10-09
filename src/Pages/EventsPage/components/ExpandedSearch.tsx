import search from "../../../Images/search.svg";

export default function ExpandedSearch({ handleExpandedClose }) {
  return (
    <div className="fixed top-[25vh] left-[10vw]">
      <div className="flex flex-col items-center justify-center mx-auto mb-4 bg-white shadow-md border border-1  h-[50vh] w-[80vw] relative">
        <div className="mt-6 mb-2 w-[90vw]  flex justify-center relative">
          <div className="border border-1 rounded-lg border-black p-2  text-lg flex flex-col sm:flex-row">
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
