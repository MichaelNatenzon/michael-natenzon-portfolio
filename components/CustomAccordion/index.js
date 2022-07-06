import Accordion from "react-bootstrap/Accordion";

import {
  AccordionTitleWrapper,
  AccordionHeaderWrapper,
} from "./CustomAccordionElements";

// Accordion Title Based on Input
const AccordionTitleDetails = ({ accordionTitle, accordionSubtitle }) => {
  return (
    <div>
      {accordionSubtitle ? (
        <AccordionTitleWrapper accordionSubtitle={accordionSubtitle}>
          <div>{accordionTitle}</div>
          <div style={{ fontWeight: "bold", marginTop: "3px" }}>
            {accordionSubtitle}
          </div>
        </AccordionTitleWrapper>
      ) : (
        <AccordionTitleWrapper accordionSubtitle={accordionSubtitle}>
          {accordionTitle}
        </AccordionTitleWrapper>
      )}
    </div>
  );
};

// Accordion Header Based on Input
const AccordionHeaderDetails = ({ title, subtitle }) => {
  return (
    <div>
      {subtitle ? (
        <AccordionHeaderWrapper subtitle={subtitle}>
          <span style={{ fontWeight: "600" }}>{title}</span>
          <br />
          <span style={{ fontWeight: "400" }}>{subtitle}</span>
        </AccordionHeaderWrapper>
      ) : (
        <AccordionHeaderWrapper subtitle={subtitle}>
          {title}
        </AccordionHeaderWrapper>
      )}
    </div>
  );
};

const CustomAccordion = ({
  accordionTitle,
  accordionSubtitle,
  accordionContents,
  accordionTheme,
}) => {
  return (
    <div
      className={
        accordionTheme == "light" ? "accordion-light" : "accordion-dark"
      }
      style={{
        width: "100%",
        zIndex: "1",
      }}
    >
      <AccordionTitleDetails
        accordionTitle={accordionTitle}
        accordionSubtitle={accordionSubtitle}
      />
      <Accordion flush>
        {accordionContents.map(({ title, subtitle, body, timespan }, index) => (
          <Accordion.Item key={index.toString()} eventKey={index.toString()}>
            <Accordion.Header>
              <AccordionHeaderDetails title={title} subtitle={subtitle} />
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ lineHeight: "30px" }}>
                {body}
                <br />
                <i style={{ fontSize: "14px" }}>{timespan}</i>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
