import React from "react";
import FixedHeightAccordion from "../FixedHeightAccordion";

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
            <FixedHeightAccordion
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
            <FixedHeightAccordion
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
            href={
              `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/documents/` +
              courseworkDetails["LinkedFilePath"]
            }
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
