import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TopCircle, BackgroundCircle } from "./ProgressCircleElements";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      {/* <CircularProgress variant="determinate" {...props} /> */}
      <BackgroundCircle
        variant="determinate"
        value={100}
        origvalue={props.value}
        colors={props.colors.bottomColor}
        colorsexcess={props.colors.bottomExcessColor}
      />
      <TopCircle
        size={40}
        thickness={4}
        variant="determinate"
        value={props.value > 100 ? props.value - 100 : props.value}
        origvalue={props.value}
        colors={props.colors.topColor}
        colorsexcess={props.colors.topExcessColor}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.units}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ value, units, colors }) {
  return (
    <CircularProgressWithLabel value={value} units={units} colors={colors} />
  );
}
