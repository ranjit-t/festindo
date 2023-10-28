import React, { useState } from "react";
import useUserChange from "../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";
import DashboardUserDisplay from "../MyDashboard/components/DashboardUserDisplay";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";

export default function CreateEvent() {
  const { signedUser, userLoading } = useUserChange();
  const navigate = useNavigate();

  const [eTitle, setETitle] = useState("");
  const [eDesc, setEDesc] = useState("");
  const [eAdd, setEAdd] = useState("");
  const [eCat, setECat] = useState("");
  const [eDate, setEDate] = useState("");
  const [ePrice, setEPrice] = useState("");
  const [eTiming, setSetTimings] = useState("");

  const [eStartTime, setEStartTime] = useState("");
  const [eEndTime, setEEndTime] = useState("");

  const [newPhoto, setNewPhoto] = useState<File | null>(null);
  const [ePhoto, setEPhoto] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setNewPhoto(files[0]);

      const url = URL.createObjectURL(files[0]);
      setEPhoto(url);
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
              css="absolute left-0 text-3xl cursor-pointer"
              onClick={() => {
                navigate("/event-management");
              }}
            >
              ←
            </Heading>
            <Heading css="">Create a new event</Heading>
          </div>
          <form className="flex flex-col gap-4 items-center mt-8">
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
            <InputField
              text="Event Category :"
              type="text"
              value={eCat}
              setValue={setECat}
              placeholder="Event Category"
              css="max-w-[500px]"
            />
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
              type="text"
              value={ePrice}
              setValue={setEPrice}
              placeholder="Event Price"
              css="max-w-[500px]"
            />
            <div className="flex gap-8">
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
            <div className="flex items-center">
              <label>
                Event Photo :
                <input
                  type="file"
                  className="border border-1 border-gray-400  px-4 py-2 outline-none rounded-lg block w-[90vw] max-w-[500px]"
                  onChange={handleImageUpload}
                  required={true}
                />
              </label>
            </div>
            {ePhoto && (
              <img
                src={ePhoto}
                alt="Profile"
                className=" h-[200px] object-cover"
              />
            )}
          </form>
        </div>
      </>
    );
  }
}
