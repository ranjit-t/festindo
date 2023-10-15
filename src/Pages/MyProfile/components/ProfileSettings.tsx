import React, { useEffect, useState } from "react";
import useUserChange from "../../../Firebase/useUserChange";
import InputField from "../../../GlobalUI/InputField";
import { storage, db } from "../../../Firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import Loading from "../../../GlobalUI/Loading";

export default function ProfileSettings() {
  const { signedUser, userLoading } = useUserChange();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [isOrganizer, setIsOrganizer] = useState<boolean>(false);
  const [newPhoto, setNewPhoto] = useState<File | null>(null); // Updated to store File object

  const [errorMessage, setErrorMessage] = useState("");
  const [pendingStatus, setPendingStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (signedUser) {
      setFullName(signedUser.fullName || "");
      setEmail(signedUser.email || "");
      setBio(signedUser?.bio || "");
      setCity(signedUser.city || "");
      setProfilePhoto(signedUser.profilePhoto || "");
      setIsOrganizer(signedUser.isOrganiser);
    }
  }, [signedUser]);

  const handleRadioChange = () => {
    setIsOrganizer((prevIsOrganizer) => !prevIsOrganizer);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setNewPhoto(files[0]);
      // Display the new image in the input field
      const url = URL.createObjectURL(files[0]);
      setProfilePhoto(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPendingStatus(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let imageURL = signedUser?.profilePhoto;
      if (newPhoto) {
        const storageRef = ref(storage, "user-profiles/" + newPhoto.name);
        await uploadBytes(storageRef, newPhoto);

        imageURL = await getDownloadURL(storageRef);
      }

      const uid = signedUser?.uid;
      if (uid) {
        try {
          const userRef = doc(db, "users", uid);

          const updateUserDetails = {
            fullName,
            email,
            bio: textToHtml(bio),
            city,
            profilePhoto: imageURL,
            isOrganiser: isOrganizer,
          };

          await updateDoc(userRef, updateUserDetails);
          setPendingStatus(false);
          setSuccessMessage("Profile updated successfully!");
          setTimeout(() => {
            location.reload();
          }, 500);
        } catch (error) {
          // console.error("Error updating user document:", error);
          setPendingStatus(false);
          setErrorMessage("Failed to update profile. Please try again.");
        }
      }
    } catch (error) {
      // console.error("Error updating user document:", error);
      setPendingStatus(false);
      setErrorMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit}
      >
        <InputField
          text="Full Name :"
          type="text"
          placeholder="full name"
          value={fullName}
          setValue={setFullName}
        />
        <InputField
          text="Email :"
          type="email"
          placeholder="email"
          value={email}
          setValue={setEmail}
          css="text-gray-500"
          disabled
        />
        {/* <InputField
          text="Bio :"
          type="textarea"
          placeholder="bio"
          value={bio}
          setValue={setBio}
        /> */}
        <div>
          <label>
            Bio :
            <div
              contentEditable
              className="border border-1 border-gray-400 px-4 py-2 outline-none rounded-lg block max-w-[300px] w-[90vw] min-h-[100px] cursor-text"
              onBlur={(e) => {
                setBio(e.target.innerHTML);
              }}
              dangerouslySetInnerHTML={{ __html: bio }}
            ></div>
          </label>
        </div>
        <InputField
          text="City :"
          type="text"
          placeholder="city"
          value={city}
          setValue={setCity}
        />
        {profilePhoto && (
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-[200px] h-[200px] object-cover rounded-full"
          />
        )}

        <label>
          Profile Photo :
          <input
            type="file"
            className="border border-1 border-gray-400  px-4 py-2 outline-none rounded-lg block max-w-[300px] w-[90vw]"
            onChange={handleImageUpload}
            required={signedUser?.profilePhoto ? false : true}
          />
        </label>

        <label className="mt-4">
          Do you want to be an organizer and host events ?
          <div className="flex justify-evenly mt-2">
            <label>
              Yes
              <input
                type="radio"
                value="yes"
                checked={isOrganizer}
                onChange={handleRadioChange}
              />
            </label>
            <label>
              No
              <input
                type="radio"
                value="no"
                checked={!isOrganizer}
                onChange={handleRadioChange}
              />
            </label>
          </div>
        </label>
        <div className="mt-4">
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {pendingStatus && <Loading />}
        </div>
        <button
          type="submit"
          className="hover:bg-gray-900 bg-black rounded-lg  text-white p-2 mt-4"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

function textToHtml(text: string) {
  // Replace newline characters with <br> tags
  const textWithLineBreaks = text.replace(/\n/g, "<br>");

  // Replace URLs with anchor tags
  const textWithLinks = textWithLineBreaks.replace(
    /https?:\/\/\S+/g,
    (url) => `<a href="${url}" target="_blank">${url}</a>`
  );

  // Wrap text in <p> tags
  const htmlText = `<p>${textWithLinks}</p>`;

  return htmlText;
}
