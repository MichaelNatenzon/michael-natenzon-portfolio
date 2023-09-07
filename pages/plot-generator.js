import Head from "next/head";
import PlotGenerator from "../components/GraphMaker";
import NavbarIframePage from "../components/NavbarIframes";
import Sidebar from "../components/Sidebar";
import LoginMenu from "../components/LoginBar";
import Footer from "../components/Footer";
import SendEthForm from "../components/services/Metamask";
import { LocalUser } from "../components/services/authService.js";

import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getStaticProps() {
  const response = await fetch(`https://themichaelnatenzon.com/home-content`, {
    method: "GET",
  });
  const resJson = await response.json();
  const pageContent = resJson["message"];

  return {
    props: {
      pageContent,
    },
  };
}

export default function Home({ pageContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [countToggleLogin, setCountToggleLogin] = useState(0);

  const [userDetails, setUserDetails] = useState(false);

  const [openEthSend, setOpenEthSend] = useState(false);
  const [countOpenEthSend, setCountOpenEthSend] = useState(0);

  const [countConnectionChecks, setCountConnectionChecks] = useState(0);

  const fetchData = async () => {
    const resJson = await fetch(
      `https://themichaelnatenzon.com/home-content`
    ).then((response) => response.json());
    const pageContent = resJson["message"];

    return {
      props: {
        pageContent,
      },
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <title>{pageContent["Metadata"]["PlotGenerator"]["Title"]}</title>
        <meta
          name="keywords"
          content={pageContent["Metadata"]["PlotGenerator"]["Keywords"]}
        />
        <meta
          name="description"
          content={pageContent["Metadata"]["PlotGenerator"]["Description"]}
        />
        <meta
          name="author"
          content={pageContent["Metadata"]["PlotGenerator"]["Author"]}
        />

        <meta
          property="og:title"
          content={pageContent["Metadata"]["PlotGenerator"]["OgTitle"]}
        />
        <meta
          property="og:description"
          content={pageContent["Metadata"]["PlotGenerator"]["OgDescription"]}
        />
        <meta
          property="og:image"
          content={
            "/images/" + pageContent["Metadata"]["PlotGenerator"]["OgImage"]
          }
        />

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

        <Sidebar
          isOpen={isOpen}
          countOpen={countOpen}
          sidebarContent={pageContent["Sidebar"]}
        />

        <NavbarIframePage
          toggle={toggle}
          toggleLoginMenu={toggleLoginMenu}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          navbarContent={pageContent["Navbar"]}
        />
        <LoginMenu
          toggleLoginMenu={toggleLogin}
          countToggleLogin={countToggleLogin}
          toggleEthSendModal={toggleEthSendModal}
          setUserDetails={setUserDetails}
          userDetails={userDetails}
          utilityUrls={pageContent["Utilities"]}
        />
        <PlotGenerator
          userDetails={userDetails}
          url={pageContent["PlotGenerator"]["Url"]}
        />
      </main>
      <Footer />
    </div>
  );
}
