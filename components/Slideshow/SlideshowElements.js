import styled from "styled-components";

import mn_image from "../../public/images/Michael_Natenzon.png";

export const SlideshowWrapper = styled.div`
  width: 100%;
  height: 60vw;
  overflow: hidden;
  margin: auto;

  @media screen and (min-width: 1300px) {
    max-height: 700px;
    padding: 0px 2vw;
  }
`;

export const SlideshowGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 5%);
  grid-template-columns: repeat(25, 4%);
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1300px) {
    width: 1300px;
    margin: auto;
  }
`;

export const SlideshowElement = styled.div`
  grid-row-start: ${({ gridRow }) => gridRow[0]};
  grid-row-end: ${({ gridRow }) => gridRow[1]};
  grid-column-start: ${({ gridCol }) => gridCol[0]};
  grid-column-end: ${({ gridCol }) => gridCol[1]};
  height: 100%;
`;

export const SlideshowHello = styled.div`
  font-size: 3vw;
  font-weight: 200;

  @media screen and (min-width: 1300px) {
    font-size: 50px;
  }
`;

export const SlideshowMyNameIs = styled.div`
  font-size: 2vw;
  font-weight: 200;
  height: 2vw;
  margin-left: 0.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 28px;
    padding-top: 10px;
    margin-left: 2px;
  }
`;

export const SlideshowName = styled.div`
  font-size: 6.2vw;
  font-weight: 200;
  line-height: 6.2vw;

  @media screen and (min-width: 1300px) {
    font-size: 76px;
  }
`;

export const SlideshowAndI = styled.div`
  font-size: 2.4vw;
  font-weight: 100;
  line-height: 2.7vw;
  margin-left: 0.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 32px;
    margin-left: 2px;
    padding-top: 40px;
  }
`;

export const SlideshowActivities = styled.div`
  font-size: 3.3vw;
  font-weight: 100;
  line-height: 3.3vw;
  margin-left: 0.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 35px;
    margin-left: 7px;
  }
`;

export const SlideshowMadeThisWebsite = styled.div`
  font-size: 2.6vw;
  font-weight: 100;
  line-height: 4vw;
  margin-left: 0.5vw;
  height: 4vw;

  @media screen and (min-width: 1300px) {
    font-size: 35px;
    margin-left: 0;
    // padding-top: 25px;
  }
`;

export const SlideshowCollegeGrad = styled.div`
  font-size: 2.3vw;
  font-weight: 100;
  line-height: 2.6vw;
  margin-left: 0.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 30px;
    margin-top: 1.3vw;
    margin-left: 7px;
  }
`;

export const SlideshowFinalBullets = styled.div`
  font-size: 2.7vw;
  font-weight: 100;
  line-height: 4.5vw;
  margin-left: 0.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 35px;
    margin-left: 7px;
  }
`;
export const SlideshowFinalBulletsMiddle = styled.div`
  font-size: 2.7vw;
  font-weight: 100;
  line-height: 4.5vw;
  margin-left: 0.5vw;
  margin-top: 1.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 35px;
    margin-left: 7px;
    margin-top: 18px;
  }
`;

export const SlideshowBottomText = styled.div`
  text-align: center;
  padding: 0px 8vw;
  font-size: ${({ textSize }) => (textSize == "small" ? "1.8vw" : "2.3vw")};
  font-weight: 100;
  line-height: 2.5vw;
  margin-bottom: 15px;

  @media screen and (min-width: 1300px) {
    font-size: 25px;
    line-height: 25px;
    padding: 0px;
    width: 1100px;
    margin: auto;
    margin-bottom: 30px;
  }
`;

export const SlideshowBottomLine = styled.div`
  border-top: 1px solid #ececec;
  padding-top: 15px;
  width: 30%;
  margin: auto;
  @media screen and (min-width: 1300px) {
    width: 400px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const SlideshowBottomSkills = styled.div`
  height: 5.4vw;
  text-align: center;
  padding: 0.5vw 8vw 0 8vw;
  margin: 1vw 0;
  font-size: 2.4vw;
  font-weight: 100;
  line-height: 2.5vw;

  @media screen and (min-width: 1300px) {
    font-size: 32px;
    line-height: 36px;
    height: 50px;
    padding: 0px;
    margin: 5px 0 25px 0;
  }
`;
