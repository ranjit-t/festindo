import React, { useState } from "react";
import Heading from "../../GlobalUI/Heading";
import InputField from "../../GlobalUI/InputField";
import SubmitButton from "../../GlobalUI/SubmitButton";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import useUserChange from "../../Firebase/useUserChange";

export default function Signup() {
  //
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  let signedUser = useUserChange();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    if (fullName.length < 5) {
      setErrorMessage("the name should at least be of characters");
      return;
    }
    if (pass !== conPass) {
      setErrorMessage("the passwords are not matching");
      return;
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    // Send email verification
    // await sendEmailVerification(userCredential.user);

    // setSuccessMessage(
    //   "successfully signup! check your inbox verify your email"
    // );

    setSuccessMessage(
      "successfully signed up! check your inbox verify your email"
    );

    const userUID = userCredential.user.uid;
    const userData = {
      uid: userUID,
      fullName,
      email,
      password: pass,
      eventsHosted: [],
      isOrganiser: false,
      followers: [],
      following: [],
    };
    const userDocRef = doc(collection(db, "users"), userUID);
    await setDoc(userDocRef, userData);
    // navigate(-1);
    // navigate("/login");
    // location.href = "/login";
    if (window.location.href.includes("festindo")) {
      navigate(-1);
    } else {
      navigate("/events");
    }
  };
  if (signedUser !== null) {
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
  }

  return (
    <div>
      <Heading css="">Signup</Heading>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center mt-8"
      >
        <InputField
          text="Full Name :"
          type="tex"
          value={fullName}
          setValue={setFullName}
          placeholder="John Doe"
        />
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
        <div className="text-red-500">{errorMessage}</div>
        <div className="text-green-500">{successMessage}</div>
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
