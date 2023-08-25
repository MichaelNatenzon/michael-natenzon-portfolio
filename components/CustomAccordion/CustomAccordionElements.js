import styled from "styled-components";

export const AccordionSectionHeaderWrapper = styled.div`
  font-size: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "22px" : "30px"};
  font-weight: 200 !important;
  line-height: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "26px" : "34px"};
  padding: ${({ accordionSubtitle }) =>
    accordionSubtitle ? "20px 0px 35px 0px" : "10px 0px 20px 0px"};
`;

export const AccordionSection = styled.div.attrs((props) => ({
  className:
    props.accordionTheme == "light" ? "accordion-light" : "accordion-dark",
}))`
  width: 100% !important;
  z-index: 1 !important;
`;

export const AccordionSectionTitle = styled.div``;
export const AccordionSectionSubtitle = styled.div`
  font-weight: bold;
  margin-top: 3px;
`;

export const AccordionElementHeaderWrapper = styled.div`
  font-size: ${({ subtitle }) => (subtitle ? "14px" : "22px")};
  line-height: ${({ subtitle }) => (subtitle ? "22px" : "28px")};
`;

export const AccordionElementTitle = styled.span`
  font-weight: 600;
`;

export const AccordionElementSubtitle = styled.span`
  font-weight: 400;
`;

export const AccordionElementBody = styled.div`
  line-height: 30px;
`;

export const AccordionElementTimespan = styled.i`
  font-size: 14px;
`;
