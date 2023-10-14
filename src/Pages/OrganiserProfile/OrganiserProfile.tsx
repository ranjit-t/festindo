import React, { useEffect } from "react";
import Heading from "../../GlobalUI/Heading";
import { useParams } from "react-router-dom";

export default function OrganiserProfile() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Heading css="">Organiser Name</Heading>
      <p>ID : {id}</p>
    </div>
  );
}
