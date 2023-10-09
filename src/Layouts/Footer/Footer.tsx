import React from "react";
import VerticalBar from "./components/VerticalBar";
import logo1 from "../../Images/logo1.png";

export default function Footer() {
  let col1 = [
    { label: "Contact Us", value: "/contact" },
    // { label: "Newsletter", value: "/newsletter" },
    { label: "Facebook", value: "/newsletter" },
    { label: "Instagram", value: "/newsletter" },
  ];
  let col2 = [
    { label: "Help Center", value: "/help" },
    { label: "Who are we", value: "/about" },
    { label: "Our Vision", value: "/vision" },
  ];
  let col3 = [
    { label: "Events", value: "/events" },
    { label: "Organise", value: "/organise" },
    { label: "FAQ", value: "/faq" },
  ];
  return (
    <div className="bg-black text-white flex flex-col items-center py-8 mt-10">
      <div className=" py-6 flex justify-evenly w-screen">
        <VerticalBar header="Contact" textTags={col1} />
        <VerticalBar header="Guide" textTags={col2} />
        <VerticalBar header="Discover" textTags={col3} />
      </div>
      <hr className="bg-white w-[70vw] my-8" />
      <p className="text-center">© All Rights Reserved To Festindo</p>
      <img src={logo1} alt="FESTINDO" className="w-20 mt-4" />
    </div>
  );
}
