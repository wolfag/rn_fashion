import React from "react";
import { Dimensions } from "react-native";

import { Box, Theme, useTheme } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};

export interface Point {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface Props {
  data: Point[];
}

export default function Graph({ data }: Props) {
  const theme = useTheme();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio;
  const dates = data.map((p) => p.date);
  const values = data.map((p) => p.value);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const chartWidth = width / data.length;

  return (
    <Box
      {...{
        width,
        height,
      }}
      marginTop="xl"
    >
      {data.map((point, i) => {
        if (point.value === 0) {
          return null;
        }
        return (
          <Box
            key={point.date}
            position="absolute"
            left={i * chartWidth}
            bottom={0}
            width={chartWidth}
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
  );
}
