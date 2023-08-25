// Miscellaneous ETH Services

// Price of: ETH, Gas, Balance
// State address state as selected Metamask address

export const getBalance = (address, setCurrentBalance) => {
  try {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        return setCurrentBalance(balance);
      });
  } catch {}
};

export const getGasPrice = (setCurrentGasPrice) => {
  try {
    window.ethereum.request({ method: "eth_gasPrice" }).then((gasPrice) => {
      setCurrentGasPrice(gasPrice);
    });
  } catch {}
};

export const getEthPrice = (setCurrentEthPrice) => {
  window
    .fetch("/api/eth-price", { method: "GET" })
    .then((result) => result.json())
    .then((result) => {
      setCurrentEthPrice(result.message.usd);
    });
};

export const getSelectedAddress = (setSelectedAddress) => {
  try {
    setSelectedAddress(ethereum.selectedAddress);
  } catch {}
};
