import UAuth from "@uauth/js";

import { LoginButton } from "./UnstoppableDomainsElements";

import { toast } from "react-toastify";

// Unstoppable Domains Auth Service
const uauthDetails = {
  clientID: process.env.NEXT_PUBLIC_UD_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UD_REDIRECT_URL,
  scope: "openid wallet",
};

const uauth = new UAuth(uauthDetails);

const UDLogin = async (setUserDetails) => {
  try {
    const authorization = await uauth.loginWithPopup();
    const NewUserDetails = {
      user: authorization.idToken.sub,
      wallet: authorization.idToken.wallet_address,
      loginMethod: "UD",
    };

    localStorage.setItem("token", JSON.stringify(NewUserDetails));
    setUserDetails(NewUserDetails);
  } catch (error) {
    toast.error("Couldn't Login Using Unstoppable Domains", {
      position: "top-center",
      autoClose: 2200,
      closeOnClick: true,
      hideProgressBar: true,
    });
  }
};

export const UDLoginButton = ({ setUserDetails, buttonContent }) => {
  return (
    <LoginButton
      onClick={() => {
        UDLogin(setUserDetails);
      }}
    >
      {buttonContent}
    </LoginButton>
  );
};

export default UDLoginButton;
