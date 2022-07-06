import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import CustomAccordion from "../CustomAccordion";

import {
  CourseworkBackdrop,
  CourseworkContainers,
  CourseworkWrapper,
  CourseworkAccordion,
  CourseworkDetailsBottom,
} from "./CourseworkElements";

import {
  accordionAContents,
  accordionATitle,
  accordionASubtitle,
  accordionBContents,
  accordionBSubtitle,
  accordionBTitle,
} from "./Data";

const Coursework = () => {
  return (
    <CourseworkBackdrop>
      <CourseworkContainers>
        <CourseworkWrapper>
          <CourseworkAccordion>
            <CustomAccordion
              accordionTitle={accordionATitle}
              accordionSubtitle={accordionASubtitle}
              accordionContents={accordionAContents}
              accordionTheme="dark"
            />
          </CourseworkAccordion>
          <CourseworkAccordion>
            <CustomAccordion
              accordionTitle={accordionBTitle}
              accordionContents={accordionBContents}
              accordionSubtitle={accordionBSubtitle}
              accordionTheme="dark"
            />
          </CourseworkAccordion>
        </CourseworkWrapper>
        <CourseworkDetailsBottom accordionTheme="dark">
          <a
            href="/documents/MichaelNatenzon_CurriculumVitae.pdf"
            target="_blank"
          >
            Click Here for a Complete Course Overview
          </a>
        </CourseworkDetailsBottom>
      </CourseworkContainers>
    </CourseworkBackdrop>
  );
};

export default Coursework;
