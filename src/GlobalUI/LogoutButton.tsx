import React from "react";
import Logout from "../Utils/Logout";

export default function LogoutButton({
  setPageDelay,
}: {
  setPageDelay: CustomDispatch<boolean>;
}) {
  return (
    <button
      onClick={async () => {
        setPageDelay((prev) => !prev);
        let status = await Logout();
        if (status) {
        } else {
          console.log("there is a problem logging out");
        }
      }}
    >
      Logout
    </button>
  );
}
