import React, { FormEvent, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";
import SubmitButton from "../../GlobalUI/SubmitButton";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";
import useUserChange from "../../Firebase/useUserChange";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signedUser, userLoading } = useUserChange();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);

      if (window.location.href.includes("festindo")) {
        navigate(-1);
      } else {
        navigate("/events");
      }
    } catch (error) {
      setErrorMessage("Oups, il y a une erreur");
    }
  };

  if (userLoading) {
    <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>;
  } else if (signedUser !== null) {
    return (
      <div className="text-center mt-8">
        <p>You are already connected</p>
        <button
          className="font-bold mt-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to events and Explore the events in your city!
        </button>
      </div>
    );
  } else {
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
          <div className="text-red-500">{errorMessage}</div>
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
}
