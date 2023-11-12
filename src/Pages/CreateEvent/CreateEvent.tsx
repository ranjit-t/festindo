import React, { useEffect, useState } from "react";
import useUserChange from "../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";
import DashboardUserDisplay from "../MyDashboard/components/DashboardUserDisplay";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";
import CropPhoto from "./CropPhoto";
import { isDateAfterToday, timeCheck } from "../../Utils/timeCheck";
import EventsType from "../../Types/EventsType";

export default function CreateEvent() {
  const { signedUser, userLoading } = useUserChange();
  const navigate = useNavigate();

  const [eTitle, setETitle] = useState("");
  const [eDesc, setEDesc] = useState("");
  const [eAdd, setEAdd] = useState("");
  const [eCat, setECat] = useState("");
  const [eDate, setEDate] = useState("");
  const [ePrice, setEPrice] = useState("");
  const [eStartTime, setEStartTime] = useState("");
  const [eEndTime, setEEndTime] = useState("");

  const defCat = ["Concert", "Festival", "Meetup", "Movie"];

  const [croppedPhoto, setCroppedPhoto] = useState<File | null>(null);

  useEffect(() => {
    console.log(croppedPhoto);
  }, [croppedPhoto]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(isDateAfterToday(new Date(eDate)));
    if (!isDateAfterToday(new Date(eDate))) {
      console.log("date wrong");
    } else if (!timeCheck(eStartTime, eEndTime)) {
      console.log("time wrong");
    } else {
      let id = (Math.random() * 10000).toString().replace(".", "");
      const formData: EventsType = {
        id,
        title: eTitle,
        description: eDesc.replace(/\n/g, "<br>"),
        address: eAdd,
        category: eCat,
        organizerName: signedUser?.fullName || "",
        organizerId: signedUser?.uid || "",
        ticketPrice: ePrice,
        country: "",
        city: "",
        date: eDate,
        startTime: eStartTime,
        endTime: eEndTime,
      };
      console.log(formData);
    }
  };

  if (userLoading) {
    return (
      <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>
    );
  } else if (signedUser === null) {
    return (
      <div className="text-center mt-16">
        Please,{" "}
        <button className="font-bold" onClick={() => navigate("/login")}>
          Login
        </button>{" "}
        to access your profile
      </div>
    );
  } else {
    return (
      <>
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <DashboardUserDisplay
            isCreating={true}
            message="I see you are in the mood to create a new event!"
          />
        </div>
        <div>
          <div className="flex justify-center relative w-[90vw] max-w-[500px] mx-auto my-12">
            <Heading
              css="absolute left-0 text-3xl cursor-pointer flex items-center"
              onClick={() => {
                navigate("/event-management");
              }}
            >
              ←<span className="text-sm"> Back</span>
            </Heading>
            <Heading css="">Create a new event</Heading>
          </div>
          <form
            className="flex flex-col gap-4 items-center mt-8 w-[90vw] max-w-[500px] mx-auto"
            onSubmit={handleFormSubmit}
          >
            <InputField
              text="Event Title :"
              type="text"
              value={eTitle}
              setValue={setETitle}
              placeholder="Event Title"
              css="max-w-[500px]"
            />
            <div className="flex items-center">
              <label>
                Event Description :
                <textarea
                  value={eDesc}
                  onChange={(e) => setEDesc(e.target.value)}
                  placeholder="Event Description"
                  className="border border-1 border-gray-400 my-2 px-4 py-2 outline-none rounded-lg block min-h-[150px]  w-[90vw] max-w-[500px]"
                />
              </label>
            </div>
            <InputField
              text="Event Address :"
              type="text"
              value={eAdd}
              setValue={setEAdd}
              placeholder="Event Address"
              css="max-w-[500px]"
            />

            <label>
              Event Category :
              <select
                onChange={(e) => setECat(e.target.value)}
                value={eCat}
                required
                className="border border-1 border-gray-400 my-2 px-4 py-2 outline-none rounded-lg block w-[90vw] max-w-[500px]"
              >
                <option value="" disabled>
                  Select
                </option>
                {defCat.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <InputField
              text="Event Date :"
              type="date"
              value={eDate}
              setValue={setEDate}
              placeholder="Event Date"
              css="max-w-[500px]"
            />
            <InputField
              text="Event Price :"
              type="number"
              value={ePrice}
              setValue={setEPrice}
              placeholder="Event Price"
              css="max-w-[500px]"
              labelInfo="0 if the entry is free"
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex items-center">
                <span>Start Time : </span>
                <input
                  type="time"
                  value={eStartTime}
                  onChange={(e) => setEStartTime(e.target.value)}
                  placeholder="Start Time"
                  className="border border-1 border-gray-400 my-2 px-4 py-2 outline-none rounded-lg block max-w-[150px] ml-4"
                />
              </div>
              <div className="flex items-center">
                <span>End Time : </span>
                <input
                  type="time"
                  value={eEndTime}
                  onChange={(e) => setEEndTime(e.target.value)}
                  placeholder="End Time"
                  className="border border-1 border-gray-400 my-2 px-4 py-2 outline-none rounded-lg block max-w-[150px] ml-4"
                />
              </div>
            </div>

            <CropPhoto setCroppedPhoto={setCroppedPhoto} />
            {croppedPhoto && (
              <img
                src={URL.createObjectURL(croppedPhoto)}
                alt="Event Photo"
                className=" h-[200px] object-cover"
              />
            )}
            {croppedPhoto && (
              <button
                type="submit"
                className="bg-black rounded-lg  hover:shadow-lg text-white p-2 "
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </>
    );
  }
}
