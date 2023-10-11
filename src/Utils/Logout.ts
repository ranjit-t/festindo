import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";

async function Logout(): Promise<boolean> {
  try {
    signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
}

export default Logout;
