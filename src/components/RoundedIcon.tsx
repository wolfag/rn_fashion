import { Feather } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text, Theme } from "./Theme";

interface Props {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
  onPress?: () => void;
}

function RoundedIcon({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  onPress,
}: Props) {
  const iconSize = size * iconRatio;

  return (
    <RectButton enabled={!!onPress} {...{ onPress }}>
      <Box
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
        {...{ backgroundColor }}
      >
        <Text {...{ color }}>
          <Feather size={iconSize} {...{ name }} />
        </Text>
      </Box>
    </RectButton>
  );
}
RoundedIcon.defaultProps = {
  iconRatio: 0.8,
};

export default RoundedIcon;
