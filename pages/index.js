import Head from "next/head";
import Script from "next/script";

import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar";
import { LocalUser } from "../components/services/authService.js";
import LoginMenu from "../components/LoginBar";
import SendBTCQR from "../components/services/btcService";
import SendEthForm from "../components/services/Metamask";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import Experiences from "../components/Experiences";
import ExperienceDetails from "../components/ExperienceDetails";
import Coursework from "../components/Coursework";

import Footer from "../components/Footer";

export async function getStaticProps() {
  // Fetch data from external API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/home-content`
  );
  const resJson = await response.json();
  const homeContent = resJson["message"];

  // Pass data to the page via props
  return {
    props: {
      homeContent,
    },
    revalidate: 10,
  };
}

export default function Home({ homeContent }) {
  const [pageContent, setPageContent] = useState(homeContent);
  const [isOpen, setIsOpen] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [countToggleLogin, setCountToggleLogin] = useState(0);

  const [userDetails, setUserDetails] = useState(false);

  const [openEthSend, setOpenEthSend] = useState(false);
  const [countOpenEthSend, setCountOpenEthSend] = useState(0);

  const [openBtcSend, setOpenBtcSend] = useState(false);
  const [countOpenBtcSend, setCountOpenBtcSend] = useState(0);

  const [countConnectionChecks, setCountConnectionChecks] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/home-content`
      );
      const resJson = await response.json();
      setPageContent(resJson["message"]);
    } catch {}
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

  const toggleBtcSendModal = () => {
    setOpenBtcSend(!openBtcSend);
    setCountOpenBtcSend(countOpenBtcSend + 1);
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
        <title>{pageContent["Metadata"]["Home"]["Title"]}</title>
        <meta
          name="keywords"
          content={pageContent["Metadata"]["Home"]["Keywords"]}
        />
        <meta
          name="description"
          content={pageContent["Metadata"]["Home"]["Description"]}
        />
        <meta
          name="author"
          content={pageContent["Metadata"]["Home"]["Author"]}
        />

        <meta
          property="og:title"
          content={pageContent["Metadata"]["Home"]["OgTitle"]}
        />
        <meta
          property="og:description"
          content={pageContent["Metadata"]["Home"]["OgDescription"]}
        />
        <meta
          property="og:image"
          content={"/images/" + pageContent["Metadata"]["Home"]["OgImage"]}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SDEKWXGLEM" />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-SDEKWXGLEM');
            `}
        </Script>
        <SendEthForm
          openEthSend={openEthSend}
          countOpenEthSend={countOpenEthSend}
          toggleEthSendModal={toggleEthSendModal}
          ethReceiverAddress={pageContent["Wallets"]["ETH"]}
          userDetails={userDetails}
        />
        <SendBTCQR
          openBtcSend={openBtcSend}
          countOpenBtcSend={countOpenBtcSend}
          toggleBtcSendModal={toggleBtcSendModal}
          receiverAddress={pageContent["Wallets"]["BTC"]}
          qrGeneratorLinks={pageContent["Utilities"]}
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

        <Navbar
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
          toggleBtcSendModal={toggleBtcSendModal}
          setUserDetails={setUserDetails}
          userDetails={userDetails}
          utilityUrls={pageContent["Utilities"]}
        />
        <Slideshow slideshowContent={pageContent["Slideshow"]} />

        <Experiences experiencesContent={pageContent["FirstSection"]} />
        <ExperienceDetails experienceDetails={pageContent["SecondSection"]} />
        <Coursework courseworkDetails={pageContent["ThirdSection"]} />
      </main>
      <Footer
        footerTopRow={pageContent["Footer"]["TopRow"]}
        footerBottomRow={pageContent["Footer"]["BottomRow"]}
      />
    </div>
  );
}
