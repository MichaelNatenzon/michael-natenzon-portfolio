import React from "react";
import FixedHeightAccordion from "../FixedHeightAccordion";

import {
  ExperienceDetailsContainers,
  ExperienceDetailsWrapper,
  ExperienceDetailsAccordion,
  ExperienceDetailsBottom,
} from "./ExperienceDetailsElements";

// Create a 2-column section with experiences
const ExperienceDetails = ({ experienceDetails }) => {
  return (
    <ExperienceDetailsContainers>
      <ExperienceDetailsWrapper>
        <ExperienceDetailsAccordion>
          <FixedHeightAccordion
            accordionTitle={experienceDetails["FirstAccordion"]["Title"]}
            accordionContents={experienceDetails["FirstAccordion"]["Contents"]}
            accordionTheme="light"
          />
        </ExperienceDetailsAccordion>
        <ExperienceDetailsAccordion>
          <FixedHeightAccordion
            accordionTitle={experienceDetails["SecondAccordion"]["Title"]}
            accordionContents={experienceDetails["SecondAccordion"]["Contents"]}
            accordionTheme="light"
          />
        </ExperienceDetailsAccordion>
      </ExperienceDetailsWrapper>
      <ExperienceDetailsBottom accordionTheme="light">
        <a
          href={"/api/documents/" + experienceDetails["LinkedFilePath"]}
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ color: "#000" }}>
            {experienceDetails["LinkedText"]}
          </span>
        </a>
      </ExperienceDetailsBottom>
    </ExperienceDetailsContainers>
  );
};

export default ExperienceDetails;
