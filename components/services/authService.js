import UAuth from "@uauth/js";
import React, { useEffect } from "react";

const uauthDetails = {
  clientID: process.env.NEXT_PUBLIC_UD_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UD_REDIRECT_URL,
  scope: "openid wallet",
};

const uauth = new UAuth(uauthDetails);

export const UDLogin = async (setUserDetails) => {
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
    console.error(error);
  }
};

export const UDLoginButton = ({ setUserDetails, buttonContent }) => {
  return (
    <button
      style={{ backgroundColor: "transparent", borderColor: "transparent" }}
      onClick={() => {
        UDLogin(setUserDetails);
      }}
    >
      {buttonContent}
    </button>
  );
};

export const CurrentLoginType = () => {
  try {
    const localUserState = localStorage.getItem("token");
    return JSON.parse(localUserState).loginMethod;
  } catch {
    return false;
  }
};

export const LocalUser = () => {
  try {
    const localUserState = localStorage.getItem("token");
    return JSON.parse(localUserState);
  } catch {
    return false;
  }
};

export const MetaLoginButton = ({ setUserDetails, buttonContent }) => {
  useEffect(() => {
    if (window.ethereum) {
      ethereum.on("accountsChanged", accountChangedHandler);
    }
  });
  const connetWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      window.open("https://metamask.io/", "_blank");
    }
  };

  const accountChangedHandler = (wallet_address) => {
    if (typeof wallet_address == "object" && wallet_address.length == 0) {
      setUserDetails(false);

      try {
        localStorage.removeItem("token");
      } catch {}
    } else if (wallet_address) {
      const NewUserDetails = {
        user: ethereum.selectedAddress,
        wallet: ethereum.selectedAddress,
        loginMethod: "MM",
      };

      localStorage.setItem("token", JSON.stringify(NewUserDetails));
      setUserDetails(NewUserDetails);
    } else {
      setUserDetails(false);

      try {
        localStorage.removeItem("token");
      } catch {}
    }
  };

  return (
    <button
      style={{ backgroundColor: "transparent", borderColor: "transparent" }}
      onClick={connetWalletHandler}
    >
      {buttonContent}
    </button>
  );
};

export const Logout = async (userDetails, setUserDetails) => {
  const loginMethod = userDetails.loginMethod;

  try {
    if (loginMethod == "UD") {
      await uauth.logout();
    }

    localStorage.removeItem("token");
    setUserDetails(false);
  } catch {
    console.log("Error! Couldn't Logout");
  }
};

// export const WalletCard = () => {
//   const [defaultAccount, setDefaultAccount] = useState(null);
//   const [defaultNetwork, setDefaultNetwork] = useState(null);
//   const [userBalance, setUserBalance] = useState(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       ethereum.on("accountsChanged", connetWalletHandler);
//       ethereum.on("chainChanged", chainChangedHandler);
//     }
//   });

//   const connetWalletHandler = () => {
//     if (window.ethereum) {
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((result) => {
//           accountChangedHandler(result[0]);
//         });
//     } else {
//       console.log("Install Metamask");
//     }
//   };

//   const accountChangedHandler = (newAccount) => {
//     setDefaultAccount(newAccount);
//     getUserBalance(newAccount.toString());
//     setDefaultNetwork(getChain());
//   };

//   const getUserBalance = (address) => {
//     window.ethereum
//       .request({ method: "eth_getBalance", params: [address, "latest"] })
//       .then((balance) => {
//         setUserBalance(ethers.utils.formatEther(balance));
//       });
//   };

//   const getChain = () => {
//     window.ethereum.request({
//       method: "wallet_switchEthereumChain",
//       params: [{ chainId: "0x1" }],
//     });
//   };

//   const chainChangedHandler = () => {
//     window.location.reload();
//   };

//   return (
//     <div>
//       <button onClick={connetWalletHandler}>Metamask</button>
//       <div>{defaultAccount}</div>
//       <div>{userBalance}</div>
//       <div>{defaultNetwork}</div>
//     </div>
//   );
// };

// export const CurrentLoginType = () => {
//   const connectedMeta = () => {
//     if (window.ethereum) {
//       if (ethereum.selectedAddress != "undefined") {
//         ("MM");
//       } else {
//         false;
//       }
//     } else {
//       false;
//     }
//   };

//   try {
//     const jwt = localStorage.getItem("username");
//     return "UD";
//   } catch (ex) {
//     connectedMeta;
//   }
// };

// export const LocalUser = (loginType) => {
//   if (loginType == "UD") {
//     try {
//       const jwtUsernameRaw = localStorage.getItem("username");
//       const jwtUsername = JSON.parse(jwtUsernameRaw)["value"];

//       const jwt = localStorage.getItem(
//         [
//           "authorization?clientID=",
//           uauthDetails.clientID,
//           "&scope=",
//           "openid+wallet",
//           "&username=",
//           jwtUsername,
//         ].join("")
//       );

//       const outputUserDetails = {
//         user: JSON.parse(jwt)["value"]["idToken"]["sub"],
//         wallet: JSON.parse(jwt)["value"]["idToken"]["wallet_address"],
//       };
//       return outputUserDetails;
//     } catch (ex) {
//       return false;
//     }
//   } else if (loginType == "MM") {
//     if (ethereum.selectedAddress != "undefined") {
//       const outputUserDetails = {
//         user: ethereum.selectedAddress,
//         wallet: ethereum.selectedAddress,
//       };
//       return outputUserDetails;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };
