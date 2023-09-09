import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { LargeModal } from "../../Modals/LargeModal";
import { CenteredDiv, BtcQrImage } from "./BtcServiceElements";

// Retrieve BTC TX Fee Metrics
export const getBtcMetrics = async (setBtcMetrics) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/btc-tx-cost`,
    {
      method: "GET",
    }
  );
  const resJson = await response.json();
  setBtcMetrics(resJson["message"]);
};

// Display BTC QR Modal
const SendBTCQR = ({
  openBtcSend,
  countOpenBtcSend,
  toggleBtcSendModal,
  receiverAddress,
  qrGeneratorLinks,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copyTextFailed, setCopyTextFailed] = useState(false);

  useEffect(() => {
    openBtcSend ? setCopiedText(false) & setCopyTextFailed(false) : "";
  }, [openBtcSend]);

  const handleCopyUrl = () => {
    try {
      navigator.clipboard.writeText(receiverAddress);
      setCopiedText(true);
    } catch {
      if (copyUrlFailed == true) {
        setCopyTextFailed(false);
      } else {
        setCopyTextFailed(true);
      }
    }
  };

  const CopyButton = () => {
    if (copiedText == true) {
      return (
        <CenteredDiv>
          <Button variant="outlined" color="success" disabled>
            Copied Address!
          </Button>
        </CenteredDiv>
      );
    } else if ((copiedText == false) & (copyTextFailed == true)) {
      return (
        <CenteredDiv>
          <Button variant="outlined" color="error" onClick={handleCopyUrl}>
            Copy Failed - Try Again
          </Button>
        </CenteredDiv>
      );
    } else {
      return (
        <CenteredDiv>
          <Button variant="outlined" onClick={handleCopyUrl}>
            Copy Address
          </Button>
        </CenteredDiv>
      );
    }
  };

  return (
    <LargeModal
      modalWidth={"clamp(500px, 30%, 600px)"}
      modalHeight={"none"}
      showState={openBtcSend}
      showStateChangeCount={countOpenBtcSend}
      modalContent={
        <div>
          <BtcQrImage
            src={
              qrGeneratorLinks["QRGeneratorUrlStart"] +
              receiverAddress +
              qrGeneratorLinks["QRGeneratorUrlEnd"]
            }
            alt="BTC QR Code"
          />
          <CopyButton />
        </div>
      }
      closeToggle={toggleBtcSendModal}
    />
  );
};

export default SendBTCQR;
