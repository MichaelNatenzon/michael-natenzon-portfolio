import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import Link from "next/link";

import { getGasPrice, getEthPrice, getBalance } from "../services/ethService";
import { MetaLoginButton } from "../services/metamask";
import { UDLoginButton } from "../services/unstoppableDomains";

import { getBtcMetrics } from "../services/btcService";

import {
  LoginBarContainer,
  LoginBarWrapper,
  BalanceWrapper,
  BtcEthLinksWrapper,
  LoginLinks,
  LoginLi,
  WhyLoginLi,
  WhyLoginButton,
  LoginLiIcon,
  LoginLiText,
} from "./LoginBarElements";

import { variantsMenu, variantsList, variantsItem } from "./Animations.js";

//Create Login Menu component
const LoginMenu = ({
  userDetails,
  toggleLoginMenu,
  toggleEthSendModal,
  toggleBtcSendModal,
  countToggleLogin,
  setUserDetails,
  utilityUrls,
}) => {
  const [currentGasPrice, setCurrentGasPrice] = useState(0);
  const [currentEthPrice, setCurrentEthPrice] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [btcMetrics, setBtcMetrics] = useState({ satoshi: "", usd: "" });

  // Update Gas and Asset Market Prices
  useEffect(() => {
    getGasPrice(setCurrentGasPrice);
    getEthPrice(setCurrentEthPrice);
    getBtcMetrics(setBtcMetrics);

    if (userDetails) {
      getBalance(userDetails.wallet, setCurrentBalance);
    }
  }, [toggleLoginMenu]);

  // Supporting Functions for Formatting
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
    .toLocaleString();

  return (
    <LoginBarContainer
      animate={toggleLoginMenu ? "visible" : "hidden"}
      variants={variantsMenu}
    >
      {/* Show tx fee metrics if logged in */}
      {userDetails ? (
        <LoginBarWrapper>
          <BalanceWrapper>
            <b>ETH Balance</b>
            <br />
            {formatBalance} (${formatBalanceUSD})
          </BalanceWrapper>
          <b>Network Tx Fees</b>
          <br />
          <Link
            href={utilityUrls["EthGasTracker"]}
            target="_blank"
            rel="noreferrer"
          >
            {(21000 * formatCurrentGasPrice) / 10 ** 9} ETH (${formatGasCost})
          </Link>

          {/* Only show BTC metrics if there are metrics to show */}
          {btcMetrics["usd"] == "" ? (
            ""
          ) : (
            <>
              <br />
              <Link
                href={utilityUrls["BtcGasTracker"]}
                target="_blank"
                rel="noreferrer"
              >
                {btcMetrics["satoshi"].toLocaleString()} Satoshis ($
                {(Math.round(btcMetrics["usd"] * 100) / 100).toString()})
              </Link>
            </>
          )}
          <br />
          <BtcEthLinksWrapper>
            <button onClick={toggleBtcSendModal}>BTC</button>&#x2022;
            <button onClick={toggleEthSendModal}>ETH</button>
          </BtcEthLinksWrapper>
        </LoginBarWrapper>
      ) : (
        // Show login items if not logged in
        <AnimatePresence>
          {toggleLoginMenu && (
            <LoginLinks
              variants={variantsList}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                delay: 0.1,
                duration: 0.1,
                transition: { when: "beforeChildren" },
              }}
              key={countToggleLogin}
            >
              <MetaLoginButton
                setUserDetails={setUserDetails}
                buttonContent={
                  <LoginLi variants={variantsItem}>
                    <LoginLiIcon src={utilityUrls["MMImage"]} width="45px" />
                    <LoginLiText>Login with Metamask</LoginLiText>
                  </LoginLi>
                }
              />
              <UDLoginButton
                setUserDetails={setUserDetails}
                buttonContent={
                  <LoginLi variants={variantsItem}>
                    <LoginLiIcon src={utilityUrls["UDImage"]} width="35px" />
                    <LoginLiText>Login with Unstoppable</LoginLiText>
                  </LoginLi>
                }
              />
              <WhyLoginLi variants={variantsItem}>
                <WhyLoginButton
                  onClick={() => {
                    toast(
                      "Logging in will get you access to some cool web3 features",
                      {
                        autoClose: 2000,
                      }
                    );
                  }}
                >
                  Why Login?
                </WhyLoginButton>
              </WhyLoginLi>
            </LoginLinks>
          )}
        </AnimatePresence>
      )}
    </LoginBarContainer>
  );
};

export default LoginMenu;
