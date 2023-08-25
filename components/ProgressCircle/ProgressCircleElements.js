import styled from "styled-components";

import CircularProgress from "@mui/material/CircularProgress";

export const TopCircle = styled(CircularProgress)`
  ${({ origvalue, colors, colorsexcess }) =>
    origvalue > 100
      ? `color: ${colorsexcess} !important;`
      : `color: ${colors} !important;`};
`;

export const BackgroundCircle = styled(CircularProgress)`
  position: absolute !important;
  left: 0 !important;

  ${({ origvalue, colors, colorsexcess }) =>
    origvalue > 100
      ? `color: ${colorsexcess} !important;`
      : `color: ${colors} !important;`};
`;
