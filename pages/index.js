import Head from "next/head";
import Slideshow from "../components/Slideshow";
import Experiences from "../components/Experiences";
import ExperienceDetails from "../components/ExperienceDetails";
import Coursework from "../components/Coursework";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LoginMenu from "../components/LoginBar";
import Footer from "../components/Footer";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

import {
  CurrentLoginType,
  LocalUser,
} from "../components/services/authService.js";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [countToggleLogin, setCountToggleLogin] = useState(0);

  const [loginType, setLoginType] = useState(CurrentLoginType);
  const [userDetails, setUserDetails] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setToggleLogin(false);
      setCountToggleLogin(countToggleLogin + 1);
      setIsOpen(false);
      setCountOpen(countOpen + 1);
      console.log(process.env.UD_REDIRECT_URL);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Natenzon | Introduction</title>
        <meta
          name="keywords"
          content="Data, Scientist, Engineer, Michael, Natenzon, New, York, Manhattan, Science, Senior, New York, Data Scientist"
        />
        <meta
          name="description"
          content="Michael Natenzon is a Johns Hopkins University educated engineer and MBA working as a Data Scientist in New York City."
        />
        <meta name="author" content="Michael Natenzon" />

        <meta
          property="og:title"
          content="Michael Natenzon | Senior Data Scientist"
        />
        <meta
          property="og:description"
          content="Transforming data into dashboards that help decision makers navigate ambiguous business problems."
        />
        <meta property="og:image" content="/images/MichaelNatenzon.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
          setUserDetails={setUserDetails}
          userDetails={userDetails}
        />
        <Slideshow />

        <Experiences />
        <ExperienceDetails />
        <Coursework />
      </main>
      <Footer />
    </div>
  );
}
