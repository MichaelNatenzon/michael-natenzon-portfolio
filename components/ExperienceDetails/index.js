import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import CustomAccordion from "../CustomAccordion";

import {
  ExperienceDetailsContainers,
  ExperienceDetailsWrapper,
  ExperienceDetailsAccordion,
  ExperienceDetailsBottom,
} from "./ExperienceDetailsElements";

import {
  accordionAContents,
  accordionATitle,
  accordionBContents,
  accordionBTitle,
} from "./Data";

const ExperienceDetails = () => {
  return (
    <ExperienceDetailsContainers>
      <ExperienceDetailsWrapper>
        <ExperienceDetailsAccordion>
          <CustomAccordion
            accordionTitle={accordionATitle}
            accordionContents={accordionAContents}
            accordionTheme="light"
          />
        </ExperienceDetailsAccordion>
        <ExperienceDetailsAccordion>
          <CustomAccordion
            accordionTitle={accordionBTitle}
            accordionContents={accordionBContents}
            accordionTheme="light"
          />
        </ExperienceDetailsAccordion>
      </ExperienceDetailsWrapper>
      <ExperienceDetailsBottom accordionTheme="light">
        <a href="/documents/MichaelNatenzon_Resume.pdf" target="_blank">
          <span style={{ color: "#000" }}>Click Here for a Resume</span>
        </a>
      </ExperienceDetailsBottom>
    </ExperienceDetailsContainers>
  );
};

export default ExperienceDetails;
