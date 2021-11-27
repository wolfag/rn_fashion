import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment";

import { Box, Text, useTheme } from "../../../components";

import { lerp } from "./Scale";

export const MARGIN = "l";

const formatter = Intl.DateTimeFormat("en", { month: "short" });

interface Props {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
  minX: number;
  maxX: number;
}

export default function Underlay({
  dates,
  minY,
  maxY,
  step,
  minX,
  maxX,
}: Props) {
  const theme = useTheme();
  const numberOfMonths = moment(maxX).subtract(moment(minX).month()).month();
  const minDate = moment(minX);

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box key={t} flexDirection="row" alignItems="center">
            <Box width={theme.spacing.xl} paddingRight="s">
              <Text color="darkGrey" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box
              flex={1}
              height={StyleSheet.hairlineWidth}
              backgroundColor="darkGrey"
            />
          </Box>
        ))}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center"
      >
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => moment(minDate.add(i, "month")))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
