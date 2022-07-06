import styled from "styled-components";

export const CourseworkBackdrop = styled.div`
  background-color: #12162b;
  width: 100%;
`;

export const CourseworkContainers = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  color: #fff;

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

export const CourseworkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: ;
  grid-gap: 30px;
  padding: 60px 0px 70px 0px;

  @media screen and (max-width: 1130px) {
    grid-template-columns: 1fr;

    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CourseworkAccordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CourseworkDetailsBottom = styled.div`
  font-size: 30px;
  line-height: 34px;
  font-weight: 200;
  text-align: center;
  padding: 0px 20px 50px 20px;

  a {
    color: ${({ accordionTheme }) =>
      accordionTheme == "light" ? "#000" : "#fff"};
  }
`;
