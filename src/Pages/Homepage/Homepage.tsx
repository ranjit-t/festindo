import React from "react";
import Heading from "../../GlobalUI/Heading";
import tickets from "../../Images/banner.avif";

// import eventStore from "../../Store/eventStore";
// import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../Hooks/ScrollToTop";
import CountriesList from "./components/CountriesList";

export default function Homepage() {
  // const { changeCountry } = eventStore();
  // const navigate = useNavigate();

  ScrollToTop();

  return (
    <div className="flex flex-col items-center">
      <img
        src={tickets}
        alt="Banner"
        className="max-h-[550px] w-screen object-cover "
      />

      {/* Here */}
      <div>
        <div className="flex justify-start w-[80vw] sm:w-[70vw]">
          <Heading css="underline underline-offset-[6px] mt-8">
            What is FESTINDO ?
          </Heading>
        </div>
        <div className="flex flex-col justify-start w-[80vw] sm:w-[70vw] mt-6 text-lg text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            consectetur neque modi nemo facilis amet odio vero suscipit
            doloremque repellendus eaque, dolor minus exercitationem quaerat
            expedita totam error nobis veniam! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cumque consectetur neque modi nemo
            facilis amet odio vero suscipit doloremque repellendus eaque, dolor
            minus exercitationem quaerat expedita totam error nobis veniam!
          </p>
        </div>

        {/* Here */}
        <div className="flex flex-col sm:flex-row gap-8 justify-start w-[80vw] sm:w-[70vw] mt-6 text-lg text-justify">
          <div className="flex flex-col items-start  gap-4">
            <div className="">
              <Heading css="underline underline-offset-[6px] mt-2 text-lg font-bold">
                Is It Really Free ?
              </Heading>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur neque modi nemo facilis amet odio vero suscipit
                doloremque repellendus eaque, dolor minus exercitationem quaerat
                expedita totam error nobis veniam!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start  gap-4">
            <div className="">
              <Heading css="underline underline-offset-[6px] mt-2 text-lg font-bold">
                Donate to keep us working !
              </Heading>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur neque modi nemo facilis amet odio vero suscipit
                doloremque repellendus eaque, dolor minus exercitationem quaerat
                expedita totam error nobis veniam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start w-[80vw] sm:w-[70vw]">
        <Heading css="underline underline-offset-[6px] mt-8">Countries</Heading>
      </div>
      <CountriesList />
    </div>
  );
}
