import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import FramerMotionItem from "../MotionContent";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeAnimations, SlideshowText, SlideshowSkills } from "./Data";

import {
  SlideshowWrapper,
  SlideshowGrid,
  SlideshowElement,
  SlideshowBottomText,
  SlideshowBottomLine,
  SlideshowBottomSkills,
} from "./SlideshowElements";

const TimeoutAnimation = (setState, delay) => {
  setTimeout(() => {
    setState(false);
  }, delay);
};

const Slideshow = () => {
  const [showHello, setShowHello] = useState(true);
  TimeoutAnimation(setShowHello, 1300);

  const [showName, setShowName] = useState(true);
  TimeoutAnimation(setShowName, 4300);

  const [showLine, setShowLine] = useState(true);

  const [showMichael, setShowMichael] = useState(true);
  TimeoutAnimation(setShowMichael, 3600);

  const [showFullName, setShowFullName] = useState(true);

  const [showAndI, setShowAndI] = useState(true);
  TimeoutAnimation(setShowAndI, 5500);

  const [showWorkIn, setShowWorkIn] = useState(true);
  TimeoutAnimation(setShowWorkIn, 7400);

  const [showWorkInRole, setShowWorkInRole] = useState(true);
  TimeoutAnimation(setShowWorkInRole, 7400);

  const [showResearchIn, setShowResearchIn] = useState(true);
  TimeoutAnimation(setShowResearchIn, 10200);

  const [showResearchInTopic, setShowResearchInTopic] = useState(true);
  TimeoutAnimation(setShowResearchInTopic, 10200);

  const [showStudied, setShowStudied] = useState(true);
  TimeoutAnimation(setShowStudied, 13000);

  const [showStudiedTopic, setShowStudiedTopic] = useState(true);
  TimeoutAnimation(setShowStudiedTopic, 13000);

  const [showAndIAlso, setShowAndIAlso] = useState(true);
  TimeoutAnimation(setShowAndIAlso, 15200);

  const [showMakeWeb, setShowMadeWeb] = useState(true);
  TimeoutAnimation(setShowMadeWeb, 15800);

  const [showGraduate, setShowGraduate] = useState(true);
  const [showDataScience, setShowDataScience] = useState(true);
  const [showBSME, setShowBSME] = useState(true);
  const [showMBAErm, setShowMBAErm] = useState(true);

  const allStates = [
    showHello,
    showLine,
    showName,
    showMichael,
    showFullName,
    showAndI,
    showWorkIn,
    showWorkInRole,
    showResearchIn,
    showResearchInTopic,
    showStudied,
    showStudiedTopic,
    showAndIAlso,
    showMakeWeb,
    showGraduate,
    showDataScience,
    showBSME,
    showMBAErm,
  ];

  return (
    <div id="slideshow">
      <SlideshowWrapper>
        <SlideshowGrid>
          {WelcomeAnimations.map(
            (
              { x, y, o, d, delay, content, style, gridRow, gridCol },
              index
            ) => (
              <SlideshowElement
                gridRow={gridRow}
                gridCol={gridCol}
                key={index.toString()}
                eventKey={index.toString()}
              >
                <FramerMotionItem
                  x={x}
                  y={y}
                  o={o}
                  d={d}
                  delay={delay}
                  content={content}
                  showState={allStates[index]}
                  style={style}
                />
              </SlideshowElement>
            )
          )}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 0,
                y: 0,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 1.2, delay: 3.9 },
              },
            }}
            initial="hidden"
            animate="visible"
            style={{
              gridRowStart: 2,
              gridRowEnd: 20,
              gridColumnStart: 19,
              gridColumnEnd: 24,
              maxHeight: "800px",
              backgroundImage: `url("/images/Michael_Natenzon.png")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
        </SlideshowGrid>
      </SlideshowWrapper>
      <SlideshowBottomText>{SlideshowText}</SlideshowBottomText>
      <SlideshowBottomLine />
      <SlideshowBottomText textSize="small">
        I also build web and decentralized web applications in my spare time
      </SlideshowBottomText>
    </div>
  );
};

export default Slideshow;
