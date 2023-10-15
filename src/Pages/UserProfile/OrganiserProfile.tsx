import React, { useEffect, useState } from "react";
import Heading from "../../GlobalUI/Heading";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../Hooks/ScrollToTop";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import OrgStatistics from "./components/OrgStatistics";
import OrgFollow from "./components/OrgFollow";

export default function UserProfile() {
  const { uid } = useParams();
  ScrollToTop();

  const [organiser, setOrganiser] = useState<UserDetailsType | null>(null);

  const [loading, setLoading] = useState(true);

  const [followChanged, setFollowChanged] = useState<boolean>(false);

  useEffect(() => {
    const userRef = doc(db, "users", String(uid));

    const fetchData = async () => {
      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data() as UserDetailsType;
          setOrganiser(userData);
          setLoading(false);
        } else {
          setOrganiser(null);
          setLoading(false);
        }
      } catch (error) {
        setOrganiser(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [followChanged]);

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
      <div className="flex flex-col items-center">
        {organiser?.profilePhoto && (
          <img
            src={organiser.profilePhoto}
            alt=""
            className="w-32 h-32 object-cover rounded-full border border-1 border-black  shadow-lg"
          />
        )}
        <Heading css="my-6">{organiser?.fullName}</Heading>
        <OrgStatistics organiser={organiser} />
        <OrgFollow organiser={organiser} setFollowChanged={setFollowChanged} />
      </div>
      <div className="flex items-start  gap-6  p-2 min-w-[250px]">
        <span className="font-bold pl-2 underline underline-offset-4 ">
          Bio :
        </span>
        <p className="text-gray-700">
          <span dangerouslySetInnerHTML={{ __html: organiser?.bio }}></span>
        </p>
      </div>
      <div className="flex items-center  gap-6 p-2 min-w-[250px]">
        <span className="font-bold pl-2 underline underline-offset-4">
          City :
        </span>
        <p className="text-gray-700">
          <span>{organiser?.city}</span>
        </p>
      </div>
    </div>
  );
}
