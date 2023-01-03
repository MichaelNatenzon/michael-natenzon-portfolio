import Head from "next/head";
import PlotGenerator from "../components/PlotGenerator";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LoginMenu from "../components/LoginBar";
import Footer from "../components/Footer";
import SendEthForm from "../components/services/Metamask/SendService";
import {
  CurrentLoginType,
  LocalUser,
} from "../components/services/authService.js";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [countToggleLogin, setCountToggleLogin] = useState(0);

  const [userDetails, setUserDetails] = useState(false);

  const [openEthSend, setOpenEthSend] = useState(false);
  const [countOpenEthSend, setCountOpenEthSend] = useState(0);

  const [countConnectionChecks, setCountConnectionChecks] = useState(0);

  useEffect(() => {
    if (countConnectionChecks == 0) {
      setCountConnectionChecks(1);
    } else if (countConnectionChecks == 1) {
      setTimeout(setUserDetails(LocalUser()), 1000);
      setCountConnectionChecks(2);
    }
  });

  const toggle = () => {
    setIsOpen(!isOpen);
    setCountOpen(countOpen + 1);
  };

  const toggleLoginMenu = () => {
    setToggleLogin(!toggleLogin);
    setCountToggleLogin(countToggleLogin + 1);
  };

  const toggleEthSendModal = () => {
    setOpenEthSend(!openEthSend);
    setCountOpenEthSend(countOpenEthSend + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setToggleLogin(false);
      setCountToggleLogin(countToggleLogin + 1);
      setIsOpen(false);
      setCountOpen(countOpen + 1);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Natenzon | Plot Generator</title>
        <meta
          name="keywords"
          content="Data, Scientist, Engineer, Michael, Natenzon, New, York, Plot, Generate"
        />
        <meta
          name="description"
          content="A project that makes it easy to generate elegant plots in bulk."
        />
        <meta name="author" content="Michael Natenzon" />

        <meta property="og:title" content="Michael Natenzon | Plot Generator" />
        <meta
          property="og:description"
          content="A project that makes it easy to generate elegant plots in bulk."
        />
        <meta property="og:image" content="/images/MichaelNatenzon.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.fullpageiframe}>
        <SendEthForm
          openEthSend={openEthSend}
          countOpenEthSend={countOpenEthSend}
          toggleEthSendModal={toggleEthSendModal}
          userDetails={userDetails}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
        />

        <Sidebar isOpen={isOpen} countOpen={countOpen} />

        <Navbar
          toggle={toggle}
          toggleLoginMenu={toggleLoginMenu}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
        <LoginMenu
          toggleLoginMenu={toggleLogin}
          countToggleLogin={countToggleLogin}
          toggleEthSendModal={toggleEthSendModal}
          setUserDetails={setUserDetails}
          userDetails={userDetails}
        />
        <PlotGenerator/>
      </main>
      <Footer />
    </div>
  );
}
