import search from "../../../Images/search.svg";

export default function TriggerSearch({
  expanded,
  setExpanded,
  setByCity,
}: {
  expanded: boolean;
  setExpanded: CustomDispatch<boolean>;
  setByCity: CustomDispatch<string>;
}) {
  return (
    <>
      <div className="mt-6  mr-0 sm:mr-[1vw] flex flex-col justify-center items-center sm:items-end ">
        <div className="border border-1 rounded-lg border-black pl-2 pr-1 py-1 max-w-[220px] text-lg flex items-center mb-2">
          {/* <p className="text-gray-400 mr-6">Search</p> */}
          <input
            type="text"
            placeholder="City"
            className="w-28 outline-none"
            onChange={(e) => {
              setByCity(e.target.value);
            }}
          />
          <div className="rounded-full  p-1 shadow-md search-button">
            <img src={search} alt="" className="w-6 cursor-pointer " />
          </div>
        </div>
        <button onClick={() => setExpanded(true)}>Advanced Search</button>
      </div>
    </>
  );
}
