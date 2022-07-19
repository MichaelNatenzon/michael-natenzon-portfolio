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
    .fetch("https://api.gemini.com/v2/ticker/ethusd", { method: "GET" })
    .then((result) => result.json())
    .then((data) => {
      setCurrentEthPrice(data.ask);
    });
};
