import styled from "styled-components";

import Accordion from "react-bootstrap/Accordion";

export const AccordionSectionHeaderWrapper = styled.div`
  text-align: left;
  font-size: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "22px" : "30px"};
  font-weight: 200 !important;
  line-height: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "26px" : "34px"};
  padding: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "20px 0px 35px 0px" : "10px 0px 20px 0px"};

  @media screen and (max-width: 540px) {
    text-align: center;
    padding: 0px 0px 20px 0px;
    font-size: 22px;
  }
`;

export const AccordionSection = styled.div.attrs((props) => ({
  className:
    props.accordionTheme == "light" ? "accordion-light" : "accordion-dark",
}))`
  width: 100% !important;
  z-index: 1 !important;
  overflow-y: hidden;

  max-height: ${({ countElements, countSubtitledElements }) =>
    (countElements * 80 + countSubtitledElements * 18).toString() + "px"};
  min-height: ${({ countElements, countSubtitledElements }) =>
    (countElements * 80 + countSubtitledElements * 18).toString() + "px"};

  @media screen and (max-width: 540px) {
    max-height: ${({ countElements, countSubtitledElements }) =>
      (countElements * 82 + countSubtitledElements * 18).toString() + "px"};
    min-height: ${({ countElements, countSubtitledElements }) =>
      (countElements * 82 + countSubtitledElements * 18).toString() + "px"};
  }
`;

export const AccordionSectionTitle = styled.div`
  text-align: left;

  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;
export const AccordionSectionSubtitle = styled.div`
  font-weight: bold;
  margin-top: 3px;
  text-align: left;

  @media screen and (max-width: 540px) {
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const AccordionElementHeaderWrapper = styled.div`
  font-size: ${({ subtitle }) => (subtitle ? "14px" : "22px")};
  line-height: ${({ subtitle }) => (subtitle ? "22px" : "28px")};
`;

export const AccordionItem = styled(Accordion.Item)`
  opacity: ${({ index, selectedindex }) =>
    selectedindex == 100000 ? 1 : index == selectedindex ? 1 : 0};

  z-index: ${({ index }) => index.toString()}

  max-height: ${({ index, selectedindex }) =>
    selectedindex == 100000
      ? "100px"
      : index == selectedindex
      ? "100px"
      : "0px"};

  transition: ${({ selectedindex, previousindex }) =>
    selectedindex == 100000 && previousindex == 0
      ? "opacity 0.3s, max-height 0.1s, z-index 0.5s"
      : selectedindex == 100000
      ? "opacity 0.3s, max-height 0.6s, z-index 0.5s"
      : "opacity 0.2s, max-height 0.5s, z-index 0.5s"};
`;

export const AccordionHeader = styled(Accordion.Header)`
  max-height: ${({ index, selectedindex }) =>
    selectedindex == 100000
      ? "100px"
      : index == selectedindex
      ? "100px"
      : "0px"};

  transition: ${({ selectedindex, previousindex }) =>
    selectedindex == 100000 && previousindex == 0
      ? "max-height 0.1s"
      : selectedindex == 100000
      ? "max-height 0.6s"
      : "max-height 0.5s"};
`;

export const AccordionElementTitle = styled.span`
  font-weight: 600;
`;

export const AccordionElementSubtitle = styled.span`
  font-weight: 400;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const AccordionElementBody = styled.div`
  line-height: 30px;
`;

export const AccordionElementTimespan = styled.i`
  font-size: 14px;
`;
