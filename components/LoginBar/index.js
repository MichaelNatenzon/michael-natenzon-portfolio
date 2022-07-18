import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getGasPrice, getEthPrice, getBalance } from "../services/ethService";

import { ethers } from "ethers";

import {
  LoginBarContainer,
  LoginLi,
  LoginLiIcon,
  LoginLiText,
} from "./LoginBarElements";

import { MetaLoginButton, UDLoginButton } from "../services/authService.js";

const variantsMenu = {
  hidden: {
    opacity: 1,
    y: -175,
    transition: {
      duration: 0.7,
      delay: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: -20,
  },
};

const variantsList = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.6,
    },
  },
};

const variantsItem = {
  hidden: { x: 0, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    delay: 0.4,
  },
};

const LoginMenu = ({
  userDetails,
  toggleLoginMenu,
  countToggleLogin,
  setUserDetails,
}) => {
  const [currentGasPrice, setCurrentGasPrice] = useState(0);
  const [currentEthPrice, setCurrentEthPrice] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    getGasPrice(setCurrentGasPrice);
    getEthPrice(setCurrentEthPrice);

    if (userDetails) {
      getBalance(userDetails.wallet, setCurrentBalance);
    }
  }, [toggleLoginMenu]);

  const LoginMenuContents = () => {
    const formatBalance = ethers.utils
      .formatEther(currentBalance)
      .toString()
      .substring(0, 8);

    const formatCurrentGasPrice = Math.round(
      ethers.utils.formatUnits(currentGasPrice, "gwei")
    ).toString();

    const formatCurrentEthPrice = Math.round(currentEthPrice).toString();

    const formatGasCost = (
      ethers.utils.formatEther(currentGasPrice) *
      currentEthPrice *
      21000
    )
      .toFixed(2)
      .toString();

    const formatBalanceUSD = (formatBalance * formatCurrentEthPrice)
      .toFixed(2)
      .toString();

    return userDetails ? (
      <div
        style={{
          paddingTop: "40px",
          paddingRight: "15px",
          textAlign: "right",
          width: "100%",
        }}
      >
        <b>ETH Balance</b>
        <br />
        {formatBalance} (${formatBalanceUSD})
        <br />
        <br />
        <b>Transaction Cost</b>
        <br />
        {formatCurrentGasPrice} Gwei (${formatGasCost})
      </div>
    ) : (
      <AnimatePresence>
        {toggleLoginMenu && (
          <motion.ul
            variants={variantsList}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              delay: 0.1,
              duration: 0.1,
              transition: { when: "beforeChildren" },
            }}
            style={{
              listStyleType: "none",
              lineHeight: "45px",
              paddingLeft: "0px",
              paddingTop: "7px",
            }}
            key={countToggleLogin}
          >
            <MetaLoginButton
              setUserDetails={setUserDetails}
              buttonContent={
                <LoginLi variants={variantsItem}>
                  <LoginLiIcon
                    src="https://storage.googleapis.com/unstoppable-client-assets/images/wallet-button/metamask.svg"
                    width="45px"
                  />
                  <LoginLiText>Login with Metamask</LoginLiText>
                </LoginLi>
              }
            />
            <UDLoginButton
              setUserDetails={setUserDetails}
              buttonContent={
                <LoginLi variants={variantsItem}>
                  <LoginLiIcon
                    src="https://storage.googleapis.com/unstoppable-client-assets/images/logos/unstoppabledomains.png"
                    width="35px"
                  />
                  <LoginLiText>Login with Unstoppable</LoginLiText>
                </LoginLi>
              }
            />
          </motion.ul>
        )}
      </AnimatePresence>
    );
  };

  return (
    <LoginBarContainer
      animate={toggleLoginMenu ? "visible" : "hidden"}
      variants={variantsMenu}
    >
      <LoginMenuContents />
    </LoginBarContainer>
  );
};

export default LoginMenu;
