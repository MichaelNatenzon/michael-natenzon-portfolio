import Accordion from "react-bootstrap/Accordion";

import {
  AccordionSection,
  AccordionSectionHeaderWrapper,
  AccordionSectionSubtitle,
  AccordionSectionTitle,
  AccordionElementHeaderWrapper,
  AccordionElementSubtitle,
  AccordionElementTitle,
  AccordionElementBody,
  AccordionElementTimespan,
} from "./CustomAccordionElements";

// Accordion Section Header - Title and Subtitle
const AccordionSectionHeader = ({ accordionTitle, accordionSubtitle }) => {
  return (
    <>
      {accordionSubtitle ? (
        <AccordionSectionHeaderWrapper accordionSubtitle={accordionSubtitle}>
          <AccordionSectionTitle>{accordionTitle}</AccordionSectionTitle>
          <AccordionSectionSubtitle>
            {accordionSubtitle}
          </AccordionSectionSubtitle>
        </AccordionSectionHeaderWrapper>
      ) : (
        <AccordionSectionHeaderWrapper accordionSubtitle={accordionSubtitle}>
          {accordionTitle}
        </AccordionSectionHeaderWrapper>
      )}
    </>
  );
};

// Accordion Element Header - Title and Subtitle
const AccordionElementHeader = ({ title, subtitle }) => {
  return (
    <div>
      {subtitle ? (
        <AccordionElementHeaderWrapper subtitle={subtitle}>
          <AccordionElementTitle>{title}</AccordionElementTitle>
          <br />
          <AccordionElementSubtitle>{subtitle}</AccordionElementSubtitle>
        </AccordionElementHeaderWrapper>
      ) : (
        <AccordionElementHeaderWrapper subtitle={subtitle}>
          {title}
        </AccordionElementHeaderWrapper>
      )}
    </div>
  );
};

// Full Accordion Section
const CustomAccordion = ({
  accordionTitle,
  accordionSubtitle,
  accordionContents,
  accordionTheme,
}) => {
  return (
    <>
      <AccordionSection accordionTheme={accordionTheme}>
        <AccordionSectionHeader
          accordionTitle={accordionTitle}
          accordionSubtitle={accordionSubtitle}
        />
        <Accordion flush>
          {accordionContents.map(
            ({ title, subtitle, body, timespan }, index) => (
              <Accordion.Item
                key={index.toString()}
                eventKey={index.toString()}
              >
                <Accordion.Header>
                  <AccordionElementHeader title={title} subtitle={subtitle} />
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionElementBody>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: body,
                      }}
                    />
                    <br />
                    <AccordionElementTimespan>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: timespan,
                        }}
                      />
                    </AccordionElementTimespan>
                  </AccordionElementBody>
                </Accordion.Body>
              </Accordion.Item>
            )
          )}
        </Accordion>
      </AccordionSection>
    </>
  );
};

export default CustomAccordion;
