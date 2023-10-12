import React from "react";
import useUserChange from "../../../Firebase/useUserChange";

export default function ProfileMenu({ menuNum, setMenuNum }: ProfileMenuProps) {
  let signedUser = useUserChange();

  const handleMenuClick = (num: number) => {
    setMenuNum(num);
  };

  const activeMenu = "text-[16px] underline underline-offset-4";
  const inActiveMenu = "text-[14px]";

  return (
    <div className="flex flex-col items-end">
      <p>Hello {signedUser?.fullName} ! </p>
      <div className="bg-black text-white flex  gap-4 sm:w-[470px] p-4 my-4">
        <button
          onClick={() => handleMenuClick(1)}
          className={menuNum === 1 ? activeMenu : inActiveMenu}
        >
          My Upcoming Events
        </button>
        <p className="hidden sm:block">|</p>
        <button
          onClick={() => handleMenuClick(2)}
          className={menuNum === 2 ? activeMenu : inActiveMenu}
        >
          My Past Tickets
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
