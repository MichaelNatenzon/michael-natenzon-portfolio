import styled from "styled-components";

import NextImage from "next/image";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtcQrImage = styled(NextImage).attrs({
  width: 400,
  height: 400,
})``;
