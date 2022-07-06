import styled from "styled-components";

export const AccordionTitleWrapper = styled.div`
  font-size: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "22px" : "30px"};
  font-weight: 200 !important;
  line-height: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "26px" : "34px"};
  padding: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "20px 0px 35px 0px" : "10px 0px 20px 0px"};
`;

export const AccordionHeaderWrapper = styled.div`
  font-size: ${({ subtitle }) => (subtitle ? "14px" : "22px")};
  line-height: ${({ subtitle }) => (subtitle ? "22px" : "28px")};
`;
