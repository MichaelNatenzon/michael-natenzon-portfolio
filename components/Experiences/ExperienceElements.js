import styled from "styled-components";

import Image from "../Image";

export const ExperienceBackdrop = styled.div`
  width: 100%;
  margin: 0px;
  background-color: #12162b;
  color: #fff;
`;

export const ExperienceContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const ExperienceTextWrapper = styled.div`
  text-align: center;
  padding: 65px 15px 10px 15px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 40px 0px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0px 30px;
  }
`;

export const ExperienceTitle = styled.h1`
  margin: 50px 0px 44px 0px;
`;

export const ExperienceTextBody = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 28px;

  @media screen and (max-width: 540px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 60px 0px 70px 0px;

  @media (max-width: 1200px) {
    grid-gap: 5px;
    padding: 40px 0px 50px 0px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 40px 0px 30px 0px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 50px 0px 50px 0px;
  }
`;

export const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0px 15px 100px 15px;
  }
`;

export const ExperienceCardBackBody = styled.div`
  margin: 0px 10px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const ExperienceCardImage = styled(Image).attrs((props) => ({
  width: 0,
  height: 0,
  sizes: "100vw",
  src: "api/images/" + props.src,
  unoptimized: true
}))`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  layout: fill;
`;
