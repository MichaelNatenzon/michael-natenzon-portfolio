// import dayjs from "dayjs";
import { useState } from "react";
import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardFrontImage,
  FlipCardFrontContent,
  FlipCardBack,
  FlipCardBackImage,
  FlipCardBackContent,
} from "./FlipcardElements";

// Flip card has a timer that limits a flip to once every 3 seconds
// This prevents a flip glitch where hovering in the right spot
// creates a perpetual flip animation

const Flipcard = ({ FrontImage, FrontContent, BackImage, BackContent }) => {
  const [showBack, setShowBack] = useState(false);
  const [countFlips, setCountFlips] = useState(0);
  const [previousChangeTS, setPreviousChangeTS] = useState(new Date());

  return (
    <FlipCard>
      <FlipCardInner
        showBack={showBack}
        onMouseEnter={() => {
          new Date() - previousChangeTS > 3000 || countFlips == 0
            ? setShowBack(showBack ? false : true) &
              setPreviousChangeTS(new Date()) &
              setCountFlips(countFlips + 1)
            : "";
        }}
      >
        <FlipCardFront>
          <FlipCardFrontImage>{FrontImage}</FlipCardFrontImage>
          <FlipCardFrontContent>
            <div dangerouslySetInnerHTML={{ __html: FrontContent }} />
          </FlipCardFrontContent>
        </FlipCardFront>
        <FlipCardBack>
          <FlipCardBackImage>{BackImage}</FlipCardBackImage>
          <FlipCardBackContent>{BackContent}</FlipCardBackContent>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default Flipcard;
