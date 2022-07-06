import Image from "next/image";

import mn_image from "../../public/images/Michael_Natenzon.png";

import {
  SlideshowHello,
  SlideshowMyNameIs,
  SlideshowName,
  SlideshowAndI,
  SlideshowActivities,
  SlideshowMadeThisWebsite,
  SlideshowCollegeGrad,
  SlideshowFinalBullets,
  SlideshowFinalBulletsMiddle,
} from "./SlideshowElements";

export const SlideshowText = `I transform data into analytical dashboards that help decision makers more easily navigate ambiguous questions and problems.`;

export const SlideshowSkills = `Python - SQL - DataBricks - Azure - PowerBI - Looker`;

export const WelcomeAnimations = [
  {
    x: [6, 0, -6],
    y: [0, 0, 0],
    o: [0, 1, 0],
    d: [0.8, 0.9],
    delay: 0.1,
    content: (
      <SlideshowHello>
        <i>Hello,</i>
      </SlideshowHello>
    ),
    gridRow: [4, 4],
    gridCol: [5, 8],
  },

  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.4],
    delay: 0,
    content: <div></div>,
    style: {
      fontSize: "5.4vw",
      fontWeight: "200",
      zIndex: 1,
      height: "35px",
      borderTop: "2px solid #000",
    },
    gridRow: [20, 20],
    gridCol: [3, 24],
  },

  {
    x: [0, 0, 0],
    y: [-10, 0, 0],
    o: [0, 1, 0],
    d: [0.7, 0.4],
    delay: 2.2,
    content: (
      <SlideshowMyNameIs>
        <i>My name is</i>
      </SlideshowMyNameIs>
    ),
    gridRow: [3, 3],
    gridCol: [4, 8],
  },

  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 0],
    d: [0.8, 1.6],
    delay: 2.8,
    content: <SlideshowName>Michael</SlideshowName>,
    gridRow: [4, 5],
    gridCol: [4, 9],
  },
  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.8],
    delay: 3.5,
    content: <SlideshowName>Michael Natenzon</SlideshowName>,
    gridRow: [4, 5],
    gridCol: [4, 19],
  },
  {
    x: [0, 0, 0],
    y: [-2, 0, 0],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 4.1,
    content: <SlideshowAndI>And I</SlideshowAndI>,
    gridRow: [6, 8],
    gridCol: [4, 8],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 5.2,
    content: <SlideshowActivities>Work in</SlideshowActivities>,
    gridRow: [11, 12],
    gridCol: [4, 9],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 5.5,
    content: <SlideshowActivities>Data Science</SlideshowActivities>,
    gridRow: [12, 14],
    gridCol: [4, 14],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 8,
    content: <SlideshowActivities>Academically Researched</SlideshowActivities>,
    gridRow: [11, 12],
    gridCol: [4, 14],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 8.3,
    content: <SlideshowActivities>NanoTechnology</SlideshowActivities>,
    gridRow: [12, 14],
    gridCol: [4, 14],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.6],
    delay: 10.8,
    content: <SlideshowActivities>Studied</SlideshowActivities>,
    gridRow: [11, 12],
    gridCol: [4, 14],
  },
  {
    x: [0, 0, 0],
    y: [20, 0, -20],
    o: [0, 1, 0],
    d: [0.8, 0.6],
    delay: 11.1,
    content: (
      <SlideshowActivities>Enterprise Risk Management</SlideshowActivities>
    ),
    gridRow: [12, 14],
    gridCol: [4, 18],
  },

  {
    x: [1, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 0],
    d: [0.8, 0.8],
    delay: 13.2,
    content: <SlideshowMyNameIs>And I Also</SlideshowMyNameIs>,
    gridRow: [7, 7],
    gridCol: [4, 8],
  },
  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 0],
    d: [0.8, 0.6],
    delay: 14.1,
    content: (
      <SlideshowMadeThisWebsite>Coded This Website</SlideshowMadeThisWebsite>
    ),
    gridRow: [8, 8],
    gridCol: [4, 13],
  },

  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.8],
    delay: 16,
    content: (
      <SlideshowCollegeGrad>
        Graduate of The Johns Hopkins University
      </SlideshowCollegeGrad>
    ),
    gridRow: [6, 6],
    gridCol: [4, 16],
  },
  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.8],
    delay: 16,
    content: (
      <SlideshowFinalBullets>Senior Data Scientist</SlideshowFinalBullets>
    ),
    gridRow: [12, 12],
    gridCol: [4, 14],
  },
  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.8],
    delay: 16,
    content: (
      <SlideshowFinalBulletsMiddle>
        BS, Materials Engineering
      </SlideshowFinalBulletsMiddle>
    ),
    style: {},
    gridRow: [13, 13],
    gridCol: [4, 14],
  },

  {
    x: [0, 0, 0],
    y: [0, 0, 0],
    o: [0, 1, 1],
    d: [0.8, 0.8],
    delay: 16,
    content: (
      <SlideshowFinalBullets>
        MBA, Enterprise Risk Management
      </SlideshowFinalBullets>
    ),
    gridRow: [15, 15],
    gridCol: [4, 16],
  },
];
