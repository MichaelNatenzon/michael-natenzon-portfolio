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

export const getEthWeiGasPrice = (setCurrentEthWeiGasPrice) => {
  try {
    window.ethereum
      .request({
        method: "eth_gasPrice",
      })
      .then((gasPrice) => {
        setCurrentEthWeiGasPrice(parseInt(gasPrice));
      });
  } catch {}
};

export const getEthPrice = (setCurrentEthPrice) => {
  window
    .fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/eth-price`, { method: "GET" })
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
