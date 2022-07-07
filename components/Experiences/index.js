import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
// import Image from "next/image";
import Image from "../Image";

import {
  ExperienceBackdrop,
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceTextWrapper,
  ExperienceCard,
} from "./ExperienceElements";

import api_image from "../../public/images/experience/api_ingestion.jpg";
import stats_image from "../../public/images/experience/statistics.jpg";
import visuals_image from "../../public/images/experience/visualizations.jpg";

// import { FooterContainer, FooterContent } from "./ExperienceElements";

import FlipCard from "../FlipCard";

const Experience = () => {
  return (
    <ExperienceBackdrop id="experience">
      <ExperienceContainer>
        <ExperienceTextWrapper>
          <h1 style={{ margin: "50px 0px 44px 0px " }}>My Experience</h1>
          <p style={{ textAlign: "center", lineHeight: "26px" }}>
            Spans across various disciplines and work environments, ranging from
            building an online business to working with an international
            non-profit to helping a manufacturing company improve efficiency and
            a digital assets exchange reduce fraud. <br />
            My takeaway has been that every employee has the potential to create
            significant impact when provided access to the right information in
            a dynamic and explorable format.
          </p>
        </ExperienceTextWrapper>
        <ExperienceWrapper>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <Image
                  src={api_image}
                  alt="API Ingestion and Data Aggregation"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              FrontContent="API Ingestion and Data Aggregation"
              BackImage={
                <Image
                  src={api_image}
                  alt="API Ingestion and Data Aggregation"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              BackContent={
                <div style={{ margin: "0px 10px" }}>
                  <h3>
                    Integrated DataBricks and Keyvault into Azure SQL database
                    infrastructure
                    <br />
                    <br />
                    Built and managed Python ETL pipelines in DataBricks
                    <br />
                    <br />
                    Aggregated and structured data from external APIs
                  </h3>
                </div>
              }
            />
          </ExperienceCard>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <Image
                  src={stats_image}
                  alt="Statistical Analysis and Machine Learning"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              FrontContent="Statistical Analysis and Machine Learning"
              BackImage={
                <Image
                  src={stats_image}
                  alt="Statistical Analysis and Machine Learning"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              BackContent={
                <div style={{ margin: "0px 10px" }}>
                  <h4>
                    Applied statistics and ML techniques including random
                    forests, regression, and ensemble learning to identify
                    patterns of unusual customer behavior for RMA and fraud
                    analyses.
                    <br />
                    <br />
                    Performed cross-validation to test out of sample model
                    performance and applied ROC/AUC analyses to fine tune
                    parameters that optimize the tradeoff between true positive
                    and false positive rates.
                  </h4>
                </div>
              }
            />
          </ExperienceCard>
          <ExperienceCard>
            <FlipCard
              FrontImage={
                <Image
                  src={visuals_image}
                  alt="Dashboarding and Visualization"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              FrontContent="Dashboarding and Visualization"
              BackImage={
                <Image
                  src={visuals_image}
                  alt="Dashboarding and Visualization"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              }
              BackContent={
                <div style={{ margin: "0px 10px" }}>
                  <h3>
                    Converted the outputs of complex data transformations and
                    analysis into concise, interactive dashboards in Looker and
                    PowerBI.
                    <br />
                    <br />
                    Developed over 50 dashboards end-to-end across sales,
                    marketing, customer support, fraud and manufacturing.
                  </h3>
                </div>
              }
            />
          </ExperienceCard>
        </ExperienceWrapper>
      </ExperienceContainer>
    </ExperienceBackdrop>
  );
};

export default Experience;
