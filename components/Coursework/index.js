import React from "react";
import CustomAccordion from "../CustomAccordion";

import {
  CourseworkBackdrop,
  CourseworkContainers,
  CourseworkWrapper,
  CourseworkAccordion,
  CourseworkDetailsBottom,
} from "./CourseworkElements";

// Create a 2-column section to display coursework
const Coursework = ({ courseworkDetails }) => {
  return (
    <CourseworkBackdrop>
      <CourseworkContainers>
        <CourseworkWrapper>
          <CourseworkAccordion>
            <CustomAccordion
              accordionTitle={courseworkDetails["FirstAccordion"]["Title"]}
              accordionSubtitle={
                courseworkDetails["FirstAccordion"]["Subtitle"]
              }
              accordionContents={
                courseworkDetails["FirstAccordion"]["Contents"]
              }
              accordionTheme="dark"
            />
          </CourseworkAccordion>
          <CourseworkAccordion>
            <CustomAccordion
              accordionTitle={courseworkDetails["SecondAccordion"]["Title"]}
              accordionSubtitle={
                courseworkDetails["SecondAccordion"]["Subtitle"]
              }
              accordionContents={
                courseworkDetails["SecondAccordion"]["Contents"]
              }
              accordionTheme="dark"
            />
          </CourseworkAccordion>
        </CourseworkWrapper>
        <CourseworkDetailsBottom accordionTheme="dark">
          <a
            href={"/api/documents/" + courseworkDetails["LinkedFilePath"]}
            target="_blank"
            rel="noreferrer"
          >
            {courseworkDetails["LinkedText"]}
          </a>
        </CourseworkDetailsBottom>
      </CourseworkContainers>
    </CourseworkBackdrop>
  );
};

export default Coursework;
