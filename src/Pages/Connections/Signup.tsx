import React, { useState } from "react";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";
import SubmitButton from "../../GlobalUI/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting");
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  return (
    <div>
      <Heading css="">Signup</Heading>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center mt-8"
      >
        <InputField
          text="Email :"
          type="text"
          value={pass}
          setValue={setPass}
          placeholder="johndoe@gmail.com"
        />
        <InputField
          text="Password :"
          type="password"
          value={email}
          setValue={setEmail}
          placeholder="password"
        />
        <InputField
          text="Confirm Password :"
          type="password"
          value={conPass}
          setValue={setConPass}
          placeholder="confirm password"
        />
        <SubmitButton text="Signup" />
        <p>
          Already Have an Account ?{" "}
          <button className="font-bold" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
