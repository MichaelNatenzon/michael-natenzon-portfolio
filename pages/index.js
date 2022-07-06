import Head from "next/head";
import Slideshow from "../components/Slideshow";
import Experiences from "../components/Experiences";
import ExperienceDetails from "../components/ExperienceDetails";
import Coursework from "../components/Coursework";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [countOpen, setCountOpen] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
    setCountOpen(countOpen + 1);
  };

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
        <Navbar toggle={toggle} />
        <Slideshow />
        <Experiences />
        <ExperienceDetails />
        <Coursework />
      </main>
      <Footer />
    </div>
  );
}
