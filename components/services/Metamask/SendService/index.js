import FramerMotionItem from "../../../MotionContent";
import { motion, AnimatePresence, transform } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { LargeModal } from "../../../Modals/LargeModal";
import {
  getEthPrice,
  getSelectedAddress,
  getBalance,
} from "./../../ethService";

const SendEthForm = ({
  openEthSend,
  countOpenEthSend,
  toggleEthSendModal,
  userDetails,
}) => {
  const [usdSendEth, setUsdSendEth] = useState(5);

  const [loadingEthPriceState, setLoadingEthPriceState] = useState(false);
  const [currentEthPrice, setCurrentEthPrice] = useState(0);
  const [formatEthPrice, setFormatEthPrice] = useState("");

  const [selectedAddress, setSelectedAddress] = useState(false);

  const [receiverAddress, setReceiverAddress] = useState(
    "0x07cfaC3d0D24690Cbc358B5272cf0C75eDd50fB3"
  );

  const [transactionHash, setTransactionHash] = useState(false);
  const [transactionUrl, setTransactionUrl] = useState(false);

  const toggleLoadEthPrice = () => {
    setLoadingEthPriceState(true);
    getEthPrice(setCurrentEthPrice);
  };

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

  const variantsLoader = {
    loading: { rotate: 360, transition: { duration: 2, repeat: Infinity } },
    notLoading: { transition: { repeat: false } },
  };

  const ModalContent = ({ transactionHash }) => {
    const SendTransaction = () => {
      return (
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                ETH Receiver
                <br /> Address
              </span>
            </div>
            <textarea
              className="form-control"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
            />
          </div>
          <br />
          <div
            className="input-group mb-3"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <div style={{ width: "70px" }}>
              <input
                type="text"
                className="form-control"
                value={usdSendEth}
                onChange={(e) => setUsdSendEth(e.target.value)}
              />
            </div>
            <br />
            <div className="input-group-append">
              <span
                className="input-group-text"
                style={{
                  fontFamily: "helvetica",
                  fontSize: "14px",
                }}
              >
                {formatEthPrice} USD / ETH {}
                <motion.div
                  animate={loadingEthPriceState ? "loading" : "notLoading"}
                  variants={variantsLoader}
                >
                  <button
                    style={{ color: "#000" }}
                    onClick={toggleLoadEthPrice}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                  </button>
                </motion.div>
              </span>
            </div>
            <br />
            <br />
            <br />
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={sendTransaction}
                style={{ fontFamily: "helvetica" }}
              >
                Send ${usdSendEth} worth of Ethereum
              </button>
            </div>
          </div>
        </div>
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
          <div style={{ paddingTop: "25px" }}>
            <a href={transactionUrl} target="_blank" rel="noreferrer">
              <button style={{ color: "#000" }}>
                Your transaction status is available here
              </button>
            </a>
          </div>
        </div>
      );
    };

    return transactionHash ? (
      <div
        style={{
          width: "100%",
          overflowWrap: "break-word",
          textAlign: "center",
        }}
      >
        <TransactionSent />
      </div>
    ) : (
      <div
        style={{
          width: "100%",
          overflowWrap: "break-word",
          textAlign: "center",
        }}
      >
        <SendTransaction />
      </div>
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

export default SendEthForm;
