import search from "../../../Images/search.svg";

export default function TriggerSearch({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: CustomDispatch<boolean>;
}) {
  return (
    <div
      className={!expanded ? "open-trigger" : "closed-trigger "}
      onClick={() => setExpanded(true)}
    >
      <div className="mt-6  mr-0 sm:mr-[1vw] flex justify-center sm:justify-end cursor-pointer">
        <div className="border border-1 rounded-lg border-black pl-2 pr-1 py-1 max-w-[220px] text-lg flex items-center">
          <p className="text-gray-400 mr-6">Search</p>
          <div className="rounded-full  p-1 shadow-md search-button">
            <img src={search} alt="" className="w-6 cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}
