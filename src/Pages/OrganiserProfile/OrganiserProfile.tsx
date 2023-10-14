import React from "react";
import Heading from "../../GlobalUI/Heading";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../Hooks/ScrollToTop";

export default function OrganiserProfile() {
  const { id } = useParams();
  ScrollToTop();

  return (
    <div className="flex flex-col items-center">
      <Heading css="">Organiser Name</Heading>
      <p>ID : {id}</p>
    </div>
  );
}
