import React, { useEffect } from "react";
import { db } from "../Firebase/config";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

import useUserChange from "../Firebase/useUserChange";

export default function useHandleFav({
  setIsFavorite,
}: {
  setIsFavorite: CustomDispatch<boolean>;
}) {
  const { signedUser, userLoading } = useUserChange();

  const handleFav = async (eventId: string, actionText: string) => {
    //
    const userDocRef = doc(collection(db, "users"), signedUser?.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userInfo = userDocSnapshot.data();

      let existingFavs = userInfo.favorites || []; // Use the existing favorites or an empty array

      if (actionText === "add") {
        if (!existingFavs.includes(eventId)) {
          const newFavs = [...existingFavs, eventId];
          try {
            await updateDoc(userDocRef, {
              favorites: newFavs,
            });
            setIsFavorite(true);
          } catch (error) {
            console.error("Error adding favorite:", error);
          }
        }
      } else if (actionText === "remove") {
        const newFavs = existingFavs.filter(
          (favId: string) => favId !== eventId
        );
        try {
          await updateDoc(userDocRef, {
            favorites: newFavs,
          });
          setIsFavorite(false);
        } catch (error) {
          console.error("Error removing favorite:", error);
        }
      }
    }
  };

  return { handleFav };
}
