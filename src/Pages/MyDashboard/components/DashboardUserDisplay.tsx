import React from "react";
import { useNavigate } from "react-router-dom";
import plus from "../../../Images/plus.svg";
import useUserChange from "../../../Firebase/useUserChange";

export default function DashboardUserDisplay({
  isCreating = false,
  message,
}: {
  isCreating?: boolean;
  message?: string;
}) {
  const navigate = useNavigate();
  const { signedUser } = useUserChange();

  return (
    <div className="flex  justify-end items-start gap-4 mt-8 lg:mt-0">
      <div>
        <div>
          <p className="font-bold">Hello {signedUser?.fullName}!</p>
          <p className="text-gray-600 my-2">
            {message ? message : "How are you doing today ?"}
          </p>
          <hr />
        </div>
        {!isCreating && (
          <div className="flex flex-col items-end mt-4">
            <button
              className="text-lg font-bold p-2 border rounded-lg shadow-md active:shadow-lg active:p- flex gap-2"
              onClick={() => {
                navigate("/event-management/create");
              }}
            >
              <img src={plus} alt="" className="w-6 rounded-full" />{" "}
              <span>Create a new event</span>
            </button>
          </div>
        )}
      </div>
      <img
        src={signedUser?.profilePhoto}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>
  );
}
