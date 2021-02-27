import { Feather } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text, Theme } from "./Theme";

interface Props {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconSize?: number;
  onPress?: () => void;
}

export default function RoundedIcon({
  name,
  size,
  color,
  backgroundColor,
  iconSize,
  onPress,
}: Props) {
  const _iconSize = iconSize || size * 0.8;

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
          <Feather size={_iconSize} {...{ name }} />
        </Text>
      </Box>
    </RectButton>
  );
}
