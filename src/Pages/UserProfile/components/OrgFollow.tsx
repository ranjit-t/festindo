import React, { useEffect, useState } from "react";
import useUserChange from "../../../Firebase/useUserChange";
import { db } from "../../../Firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import check from "../../../Images/check.svg";
import { useNavigate } from "react-router-dom";

export default function OrgFollow({
  organiser,
  setFollowChanged,
}: {
  organiser: UserDetailsType | null;
  setFollowChanged: CustomDispatch<boolean>;
}) {
  const signedUser = useUserChange();
  const navigate = useNavigate();

  const [userFollowing, setUserFollowing] = useState(false);

  useEffect(() => {
    if (organiser?.followers && signedUser) {
      setUserFollowing((organiser?.followers).includes(signedUser?.uid));
    }
  }, [signedUser]);

  const handleFollow = async () => {
    if (signedUser) {
      const userRef = doc(db, "users", String(organiser?.uid));
      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();

          const currentFollowers = userData.followers;
          if (organiser!.followers.includes(signedUser.uid) === false) {
            const updateUserDetails = {
              followers: [...currentFollowers, signedUser?.uid],
            };

            await updateDoc(userRef, updateUserDetails);
            setUserFollowing(true);
            setFollowChanged((prev) => !prev);
          }
        } else {
          //   console.log("Document does not exist");
        }
      } catch (error) {
        // console.error("Error fetching user data:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const handleUnfollow = async () => {
    if (signedUser) {
      const userRef = doc(db, "users", String(organiser?.uid));
      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();

          const currentFollowers = userData.followers;
          const updatedFollowers = currentFollowers.filter(
            (followerUid: string) => followerUid !== signedUser?.uid
          );

          const updateUserDetails = {
            followers: updatedFollowers,
          };

          await updateDoc(userRef, updateUserDetails);
          setUserFollowing(false);
          setFollowChanged((prev) => !prev);
        } else {
          //   console.log("Document does not exist");
        }
      } catch (error) {
        // console.error("Error fetching user data:", error);
      }
    }
  };

  return (
    <>
      {signedUser?.uid !== organiser?.uid && (
        <div className="mt-2">
          {userFollowing ? (
            <div
              className="border border-black  px-4 py-2 rounded-lg flex gap-2"
              onClick={handleUnfollow}
            >
              <img src={check} alt="check" className="w-4" />{" "}
              <button>Following</button>
            </div>
          ) : (
            <button
              className="bg-black text-white px-4 py-2 rounded-lg"
              onClick={handleFollow}
            >
              Follow
            </button>
          )}
        </div>
      )}
    </>
  );
}
