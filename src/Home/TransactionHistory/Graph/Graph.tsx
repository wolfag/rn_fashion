import React from "react";
import { Dimensions } from "react-native";

import { Box, Theme, useTheme } from "../../../components";

import { lerp } from "./Scale";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface Point {
  id: number;
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface Props {
  data: Point[];
  minDate: number;
  maxDate: number;
}

export default function Graph({ data, minDate, maxDate }: Props) {
  const numberOfMonths = new Date(maxDate - minDate).getMonth();

  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.xl;
  const height = canvasHeight - theme.spacing.xl;
  const step = width / numberOfMonths;
  const dates = data.map((p) => p.date);
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box marginTop={MARGIN} paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay
        {...{ dates, minY, maxY, step, minX: minDate, maxX: maxDate }}
      />
      <Box
        {...{
          width,
          height,
        }}
      >
        {data.map((point) => {
          const i = new Date(point.date - minDate).getMonth();

          return (
            <Box
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                backgroundColor={point.color}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                opacity={0.1}
              />
              <Box
                borderRadius="m"
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={24}
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
