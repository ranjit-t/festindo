import React, { useEffect, useState } from "react";
import eventStore from "../Store/eventStore";
import Heading from "../GlobalUI/Heading";
import SelectLabels from "../GlobalUI/SelectLabels";
export default function CountryPopup() {
  const { changeCountry } = eventStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedCountry = localStorage.getItem("country");
    if (storedCountry) {
      changeCountry(JSON.parse(storedCountry));
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <>
      {visible && (
        <div className="fixed  w-screen h-screen bg-transparent z-50 flex flex-col items-center justify-center">
          <div className=" w-[70vw] h-[70vh] bg-white flex flex-col items-center justify-center mx-auto my-auto custom-box-shadow rounded-[30px]">
            <Heading css="">Choose Your Country</Heading>

            <div className="">
              {/* <select
                onChange={(e) => {
                  changeCountry(e.target.value);

                  setVisible(false);
                }}
                value={country}
                className="country-text "
              >
                <option value="" className="text-red-600" disabled>
                  Country
                </option>
                <option value="France">France</option>
                <option value="USA">USA</option>
              </select>
              <img src={downarrow} alt="Arrow" className="w-6 ml-4" /> */}
              <SelectLabels setVisible={setVisible} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
