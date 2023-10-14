import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

function useUserChange() {
  const [signedUser, setSignedUser] = useState<UserDetailsType | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userInfo = userDocSnapshot.data();

          if (userInfo) {
            setSignedUser({
              email: user.email ? user.email : "",
              fullName: userInfo.fullName,
              uid: user.uid,
              isOrganiser: userInfo.isOrganiser,
              bio: userInfo.bio,
              profilePhoto: userInfo.profilePhoto,
              city: userInfo.city,
            });
          }
        }
      } else {
        setSignedUser(null);
      }
    });
  }, []);

  return signedUser;
}

export default useUserChange;

type UserDetailsType = {
  email: string;
  fullName: string;
  uid: string;
  isOrganiser: boolean;
  bio?: string;
  city?: string;
  profilePhoto?: string;
};
