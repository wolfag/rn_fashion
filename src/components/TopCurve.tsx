import React from "react";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "./Theme";

interface Props {
  footerHeight: number;
}

export default function TopCurve({ footerHeight }: Props) {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{
        right: 0,
        position: "absolute",
        bottom: footerHeight,
      }}
      viewBox="0 0 1 1"
    >
      <Path fill={theme.colors.secondary} d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" />
    </Svg>
  );
}
