import Image from "next/image";
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

const Flipcard = ({ FrontImage, FrontContent, BackImage, BackContent }) => {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront>
          <FlipCardFrontImage>{FrontImage}</FlipCardFrontImage>
          <FlipCardFrontContent>{FrontContent}</FlipCardFrontContent>
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
