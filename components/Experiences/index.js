import React from "react";

import {
  ExperienceBackdrop,
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceTextWrapper,
  ExperienceTitle,
  ExperienceTextBody,
  ExperienceCard,
  ExperienceCardBackBody,
  ExperienceCardImage,
} from "./ExperienceElements";

import FlipCard from "../FlipCard";

// Create a 3-column experience section with:
// A main header, a text body, and 3 flip cards with custom images and text

const Experience = ({ experiencesContent }) => {
  return (
    <ExperienceBackdrop id="experience">
      <ExperienceContainer>
        {/* Start Title and Text Body Div */}
        <ExperienceTextWrapper>
          <ExperienceTitle>{experiencesContent["Title"]}</ExperienceTitle>
          <ExperienceTextBody experiencesContent={experiencesContent}>
            {experiencesContent["Body"]}
          </ExperienceTextBody>
        </ExperienceTextWrapper>

        {/* Start Flip Card Div */}
        <ExperienceWrapper>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <ExperienceCardImage
                  src={experiencesContent["LeftCard"]["ImagePath"]}
                  alt={experiencesContent["LeftCard"]["Title"]}
                />
              }
              FrontContent={experiencesContent["LeftCard"]["Title"]}
              BackImage={
                <ExperienceCardImage
                  src={experiencesContent["LeftCard"]["ImagePath"]}
                  alt={experiencesContent["LeftCard"]["Title"]}
                />
              }
              BackContent={
                <ExperienceCardBackBody
                  dangerouslySetInnerHTML={{
                    __html: experiencesContent["LeftCard"]["BodyHtml"],
                  }}
                />
              }
            />
          </ExperienceCard>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <ExperienceCardImage
                  src={experiencesContent["MiddleCard"]["ImagePath"]}
                  alt={experiencesContent["MiddleCard"]["Title"]}
                />
              }
              FrontContent={experiencesContent["MiddleCard"]["Title"]}
              BackImage={
                <ExperienceCardImage
                  src={experiencesContent["MiddleCard"]["ImagePath"]}
                  alt={experiencesContent["MiddleCard"]["Title"]}
                />
              }
              BackContent={
                <ExperienceCardBackBody
                  dangerouslySetInnerHTML={{
                    __html: experiencesContent["MiddleCard"]["BodyHtml"],
                  }}
                />
              }
            />
          </ExperienceCard>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <ExperienceCardImage
                  src={experiencesContent["RightCard"]["ImagePath"]}
                  alt={experiencesContent["RightCard"]["Title"]}
                />
              }
              FrontContent={experiencesContent["RightCard"]["Title"]}
              BackImage={
                <ExperienceCardImage
                  src={experiencesContent["RightCard"]["ImagePath"]}
                  alt={experiencesContent["RightCard"]["Title"]}
                />
              }
              BackContent={
                <ExperienceCardBackBody
                  dangerouslySetInnerHTML={{
                    __html: experiencesContent["RightCard"]["BodyHtml"],
                  }}
                />
              }
            />
          </ExperienceCard>
        </ExperienceWrapper>
      </ExperienceContainer>
    </ExperienceBackdrop>
  );
};

export default Experience;
