import Accordion from "react-bootstrap/Accordion";

import { useState, useEffect } from "react";

import {
  AccordionSection,
  AccordionSectionHeaderWrapper,
  AccordionSectionSubtitle,
  AccordionSectionTitle,
  AccordionItem,
  AccordionHeader,
  AccordionElementHeaderWrapper,
  AccordionElementSubtitle,
  AccordionElementTitle,
  AccordionElementBody,
  AccordionElementTimespan,
} from "./FixedHeightAccordionElements";

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
const AccordionElementHeader = ({
  title,
  subtitle,
  index,
  selectedIndex,
  previousIndex,
}) => {
  return (
    <>
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
    </>
  );
};

// Full Accordion Section
const FixedHeightAccordion = ({
  accordionTitle,
  accordionSubtitle,
  accordionContents,
  accordionTheme,
}) => {
  // Track index of selected items in accordion
  const [selectedIndex, setSelectedIndex] = useState(100000);
  const [previousIndex, setPreviousIndex] = useState(100000);
  const [accordionContentCount, setAccordionContentCount] = useState(0);
  const [accordionSubtitleContentCount, setAccordionSubtitleContentCount] =
    useState(0);

  useEffect(() => {
    setAccordionContentCount(accordionContents.length);
    setAccordionSubtitleContentCount(
      filterForSubtitleElements(accordionContents).length
    );
  }, [accordionContents]);

  function filterForSubtitleElements(data) {
    return data.filter(function (item) {
      if (item.subtitle != undefined) return item;
    });
  }

  // Event on selection of accordion entry
  const handleAccordionSelect = (clickedIndex) => {
    selectedIndex == clickedIndex
      ? // Close Accordion
        setPreviousIndex(selectedIndex) & setSelectedIndex(100000)
      : // Open Accordion
        setPreviousIndex(selectedIndex) & setSelectedIndex(clickedIndex);
  };

  return (
    <>
      <AccordionSection
        accordionTheme={accordionTheme}
        countElements={accordionContentCount}
        countSubtitledElements={accordionSubtitleContentCount}
      >
        <AccordionSectionHeader
          accordionTitle={accordionTitle}
          accordionSubtitle={accordionSubtitle}
        />
        <Accordion flush>
          {accordionContents.map(
            ({ title, subtitle, body, timespan }, index) => (
              <AccordionItem
                key={index.toString()}
                eventKey={index.toString()}
                index={index}
                selectedindex={selectedIndex}
                previousindex={previousIndex}
              >
                <AccordionHeader
                  index={index}
                  selectedindex={selectedIndex}
                  previousindex={previousIndex}
                  onClick={() => {
                    handleAccordionSelect(index.toString());
                  }}
                >
                  <AccordionElementHeader
                    title={title}
                    subtitle={subtitle}
                    index={index}
                    selectedindex={selectedIndex}
                    previousindex={previousIndex}
                  />
                </AccordionHeader>
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
              </AccordionItem>
            )
          )}
        </Accordion>
      </AccordionSection>
    </>
  );
};

export default FixedHeightAccordion;
