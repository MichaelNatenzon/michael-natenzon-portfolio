export const getBalance = (address, setCurrentBalance) => {
  window.ethereum
    .request({ method: "eth_getBalance", params: [address, "latest"] })
    .then((balance) => {
      return setCurrentBalance(balance);
    });
};

export const getGasPrice = (setCurrentGasPrice) => {
  window.ethereum.request({ method: "eth_gasPrice" }).then((gasPrice) => {
    setCurrentGasPrice(gasPrice);
  });
};

export const getEthPrice = (setCurrentEthPrice) => {
  window
    .fetch("https://api.gemini.com/v2/ticker/ethusd", { method: "GET" })
    .then((result) => result.json())
    .then((data) => {
      setCurrentEthPrice(data.ask);
    });
};
