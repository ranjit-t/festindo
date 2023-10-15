import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

function useUserChange() {
  const [signedUser, setSignedUser] = useState<UserDetailsType | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUserLoading(true);
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
              emailVerified: user.emailVerified,
            });
            setUserLoading(false);
          }
        }
      } else {
        setSignedUser(null);
        setUserLoading(false);
      }
    });
  }, []);

  return { signedUser, userLoading };
}

export default useUserChange;

type UserDetailsType = {
  email: string;
  fullName: string;
  uid: string;
  emailVerified: boolean;
  isOrganiser: boolean;
  bio?: string;
  city?: string;
  profilePhoto?: string;
};
