import styled from "styled-components";

export const FlipCard = styled.div`
  background-color: transparent;
  width: 360px;
  height: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  transform: rotateY(0deg);

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${({ showBack }) =>
    showBack ? `transform: rotateY(180deg);` : `transform: rotateY(0deg);`}
`;

export const FlipCardFront = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
`;

export const FlipCardFrontImage = styled.div`
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  grid-column: 1;
  grid-row: 1;
`;

export const FlipCardFrontContent = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  position: relative;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 3px 3px 15px #000000;
  margin-top: -10px;
`;

export const FlipCardBack = styled.div`
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
`;

export const FlipCardBackImage = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  grid-column: 1;
  grid-row: 1;

  &:after {
    position: relative;
    width: 100%;
    background-color: rgba(0,0,0,.64);
    display: block;
    content: "";
  }
}
`;

export const FlipCardBackContent = styled.div`
  color: #fff;
  position: absolute;
  background-color: #00000061;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 3px 3px 15px #000000;
`;
