import styled from "styled-components";

export const ExperienceDetailsContainers = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  width: 90%;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (min-width: 1400px) {
    width: 1140px;
  }
`;

export const ExperienceDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: ;
  grid-gap: 30px;
  padding: 60px 0px 45px 0px;

  @media screen and (max-width: 1130px) {
    grid-template-columns: 1fr;

    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceDetailsAccordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ExperienceDetailsBottom = styled.div`
  font-size: 30px;
  line-height: 34px;
  font-weight: 200;
  text-align: center;
  padding-bottom: 50px;

  a {
    color: ${({ accordionTheme }) =>
      accordionTheme == "light" ? "#000" : "#fff"};
  }
`;
