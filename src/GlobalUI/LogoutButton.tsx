import React from "react";
import Logout from "../Utils/Logout";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
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
