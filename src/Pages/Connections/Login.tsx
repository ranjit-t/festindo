import React, { FormEvent, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";
import SubmitButton from "../../GlobalUI/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting");
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <Heading css="">Login</Heading>
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

        <SubmitButton text="Login" />
        <p className="text-sm">
          Forgot password ?{" "}
          <button
            className="font-bold"
            onClick={() => navigate("/forgot-password")}
          >
            Reset
          </button>
        </p>
        <p>
          Don't Have an Account ?{" "}
          <button className="font-bold" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}
