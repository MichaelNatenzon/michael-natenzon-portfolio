import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import RefreshIcon from "@mui/icons-material/Refresh";

import { LargeModal } from "../../Modals/LargeModal";
import { getEthPrice } from "../ethService";

import {
  ArialContainer,
  EthReceiverContainer,
  EthReceiverContent,
  EthReceiverText,
  EthReceiverAddressInput,
  TransactionSentContainer,
  MetaMaskLoginButtonContainer,
  SendQtyAndButtonContainer,
  SendUsdCurrencySymbolContainer,
  SendUsdCurrencySymbol,
  SendUsdInputContainer,
  SendUsdInput,
  EthUsdConversionContainer,
  EthUsdConversionTextContainer,
  EthUsdConversionText,
  ReloadEthButton,
  SendEthButtonContainer,
  SendEthButton,
  CompletedTransactionContainer,
  CompletedTransactionButton,
} from "./SendServiceElements";

const SendEthForm = ({
  openEthSend,
  countOpenEthSend,
  toggleEthSendModal,
  userDetails,
  ethReceiverAddress,
}) => {
  const [usdSendEth, setUsdSendEth] = useState(5);

  const [loadingEthPriceState, setLoadingEthPriceState] = useState(false);
  const [currentEthPrice, setCurrentEthPrice] = useState(0);
  const [formatEthPrice, setFormatEthPrice] = useState("");

  const [selectedAddress, setSelectedAddress] = useState(false);

  const [receiverAddress, setReceiverAddress] = useState(ethReceiverAddress);

  const [transactionHash, setTransactionHash] = useState(false);
  const [transactionUrl, setTransactionUrl] = useState(false);

  const toggleLoadEthPrice = () => {
    setLoadingEthPriceState(true);
    getEthPrice(setCurrentEthPrice);
  };

  useEffect(() => {
    setReceiverAddress(ethReceiverAddress);
  }, [ethReceiverAddress]);

  useEffect(() => {
    if (openEthSend) {
      getEthPrice(setCurrentEthPrice);

      if (userDetails) {
        setSelectedAddress(userDetails.wallet);
      }
    } else {
      setTransactionHash(false);
    }
  }, [openEthSend, userDetails]);

  useEffect(() => {
    setTimeout(() => {
      setLoadingEthPriceState(false);
    }, 2000);

    setFormatEthPrice(() => {
      return Math.round(currentEthPrice).toLocaleString();
    });
  }, [currentEthPrice]);

  useEffect(() => {
    const newUrl = ["https://etherscan.io/tx/", transactionHash].join("");
    setTransactionUrl(newUrl);
  }, [transactionHash]);

  const transactionParameters = {
    nonce: "0x00",
    to: receiverAddress, // Required except during contract publications.
    from: selectedAddress, // must match user's active address.
    value: Math.round((usdSendEth / currentEthPrice) * 10 ** 18).toString(16), // Only required to send ether to the recipient from the initiating external account.
    chainId: "0x1", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };

  // txHash is a hex string
  // As with any RPC call, it may throw an error
  const sendTransaction = async () => {
    await ethereum
      .request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      })
      .then((result) => {
        setTransactionHash(result);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2200,
          closeOnClick: true,
          hideProgressBar: true,
        });
      });
  };

  const ModalContent = ({ transactionHash }) => {
    const SendTransaction = () => {
      return (
        <ArialContainer>
          <EthReceiverContainer>
            <EthReceiverContent>
              <EthReceiverText>
                ETH Receiver
                <br /> Address
              </EthReceiverText>
            </EthReceiverContent>
            <EthReceiverAddressInput
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
            />
          </EthReceiverContainer>
          <br />
          <SendQtyAndButtonContainer>
            <SendUsdCurrencySymbolContainer>
              <SendUsdCurrencySymbol>$</SendUsdCurrencySymbol>
            </SendUsdCurrencySymbolContainer>
            <SendUsdInputContainer>
              <SendUsdInput
                value={usdSendEth}
                onChange={(e) => setUsdSendEth(e.target.value)}
              />
            </SendUsdInputContainer>
            <br />
            <EthUsdConversionContainer>
              <EthUsdConversionTextContainer>
                <EthUsdConversionText>
                  {formatEthPrice} USD / ETH
                </EthUsdConversionText>
                <ReloadEthButton
                  loading={loadingEthPriceState}
                  onClick={toggleLoadEthPrice}
                  startIcon={<RefreshIcon />}
                  color="primary"
                />
              </EthUsdConversionTextContainer>
            </EthUsdConversionContainer>
            <br />
            <br />
            <br />
            <SendEthButtonContainer>
              <SendEthButton onClick={sendTransaction}>
                Send ${usdSendEth} worth of Ethereum
              </SendEthButton>
            </SendEthButtonContainer>
          </SendQtyAndButtonContainer>
        </ArialContainer>
      );
    };

    const TransactionSent = () => {
      return (
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="#198754"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <CompletedTransactionContainer>
            <a href={transactionUrl} target="_blank" rel="noreferrer">
              <CompletedTransactionButton>
                Your transaction status is available here
              </CompletedTransactionButton>
            </a>
          </CompletedTransactionContainer>
        </div>
      );
    };

    return transactionHash ? (
      <TransactionSentContainer>
        <TransactionSent />
      </TransactionSentContainer>
    ) : (
      <TransactionSentContainer>
        <SendTransaction />
      </TransactionSentContainer>
    );
  };

  return (
    <LargeModal
      modalWidth={"clamp(500px, 30%, 600px)"}
      modalHeight={"none"}
      showState={openEthSend}
      showStateChangeCount={countOpenEthSend}
      modalContent={<ModalContent transactionHash={transactionHash} />}
      closeToggle={toggleEthSendModal}
    />
  );
};

// Login Metamask Login Button
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
        })
        .catch((error) =>
          toast.error("Cancelled Metamask Login", {
            position: "top-center",
            autoClose: 2200,
            closeOnClick: true,
            hideProgressBar: true,
          })
        );
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
    <MetaMaskLoginButtonContainer onClick={connetWalletHandler}>
      {buttonContent}
    </MetaMaskLoginButtonContainer>
  );
};

export default SendEthForm;
