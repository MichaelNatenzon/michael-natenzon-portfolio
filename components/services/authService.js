import { toast } from "react-toastify";
import uauth from "./UnstoppableDomains";

// Check between UD and Metamask
export const CurrentLoginType = () => {
  try {
    const localUserState = localStorage.getItem("token");
    return JSON.parse(localUserState).loginMethod;
  } catch {
    return false;
  }
};

// Get Local Token
export const LocalUser = () => {
  try {
    const localUserState = localStorage.getItem("token");
    return JSON.parse(localUserState);
  } catch {
    return false;
  }
};

// Logout of UD / Metamask
export const Logout = async (userDetails, setUserDetails) => {
  const loginMethod = userDetails.loginMethod;

  try {
    if (loginMethod == "UD") {
      await uauth.logout();
    }

    localStorage.removeItem("token");
    setUserDetails(false);
  } catch {
    toast.error("Error: Couldn't Logout", {
      position: "top-right",
      autoClose: 2200,
      closeOnClick: true,
      hideProgressBar: true,
    });
  }
};
