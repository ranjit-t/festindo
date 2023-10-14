import React, { useEffect, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../Hooks/ScrollToTop";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function OrganiserProfile() {
  const { uid } = useParams();
  ScrollToTop();

  const [organiser, setOrganiser] = useState<UserDetailsType | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogRef = doc(db, "users", String(uid));

    const fetchData = async () => {
      try {
        const userSnapshot = await getDoc(blogRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setOrganiser(userData);
          setLoading(false);
        } else {
          // console.log("Document does not exist");
          setOrganiser(null);
          setLoading(false);
        }
      } catch (error) {
        // console.error("Error fetching user data:", error);
        setOrganiser(null);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>
    );
  } else if (organiser === null) {
    return (
      <div className="flex flex-col items-center mt-[20vh] text-xl">
        Sorry, Couldn't find the user!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  gap-6 w-[70vw] sm:w-[400px]  mx-auto">
      <div>
        {organiser?.profilePhoto && (
          <img
            src={organiser.profilePhoto}
            alt=""
            className="w-32 h-32 object-cover rounded-full border border-1 border-black  shadow-lg"
          />
        )}

        <Heading css="my-6">{organiser?.fullName}</Heading>
      </div>
      <div className="flex items-start  gap-6  p-2 min-w-[250px]">
        <span className="font-bold pl-2 underline underline-offset-4">
          Bio :
        </span>
        <p>
          <span dangerouslySetInnerHTML={{ __html: organiser?.bio }}></span>
        </p>
      </div>
      <div className="flex items-center  gap-6 p-2 min-w-[250px]">
        <span className="font-bold pl-2 underline underline-offset-4">
          City :
        </span>
        <p>
          <span>{organiser?.city}</span>
        </p>
      </div>
    </div>
  );
}
