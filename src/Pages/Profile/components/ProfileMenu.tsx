import React from "react";
import useUserChange from "../../../Firebase/useUserChange";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ menuNum, setMenuNum }: ProfileMenuProps) {
  let signedUser = useUserChange();

  const navigate = useNavigate();

  const handleMenuClick = (num: number) => {
    setMenuNum(num);
  };

  const activeMenu = "text-[16px] underline underline-offset-4";
  const inActiveMenu = "text-[14px]";

  return (
    <div className="flex flex-col items-end">
      <p className="font-bold text-lg">Hello {signedUser?.fullName} ! </p>
      {signedUser?.isOrganiser ? (
        <div className="flex flex-col items-end  my-4 text-gray-600">
          <p>You are an organiser,</p>
          <button
            onClick={() => {
              navigate("/event-management");
            }}
            className="font-extrabold text-black"
          >
            Go to Event Management{" "}
          </button>
          <p>to host your next event.</p>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-2 my-4">
          <p>Do you want to organise events ? </p>{" "}
          <button className="font-[900]">Go to Profile Settings and</button>
          <p>change your account type.</p>
        </div>
      )}
      <div className="bg-black text-white flex justify-evenly  gap-4 sm:w-[470px] p-4 my-4">
        <button
          onClick={() => handleMenuClick(1)}
          className={menuNum === 1 ? activeMenu : inActiveMenu}
        >
          My Tickets
        </button>
        <p className="hidden sm:block">|</p>
        <button
          onClick={() => handleMenuClick(2)}
          className={menuNum === 2 ? activeMenu : inActiveMenu}
        >
          Favorites
        </button>
        <p className="hidden sm:block">|</p>
        <button
          onClick={() => handleMenuClick(3)}
          className={menuNum === 3 ? activeMenu : inActiveMenu}
        >
          Profile Settings
        </button>
      </div>
    </div>
  );
}

type ProfileMenuProps = {
  menuNum: number;
  setMenuNum: CustomDispatch<number>;
};
