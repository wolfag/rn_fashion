import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIcon from "./RoundedIcon";
import { Box, Text } from "./Theme";

interface Props {
  title: string;
  left?: {
    icon: string;
    onPress: () => void;
  };
  right?: {
    icon: string;
    onPress: () => void;
  };
}

const IconSize = 24;

export default function Header({ title, left, right }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{
        paddingTop: insets.top,
      }}
    >
      {left ? (
        <RoundedIcon
          name={left.icon}
          color="white"
          size={IconSize}
          backgroundColor="secondary"
          onPress={left.onPress}
        />
      ) : (
        <View />
      )}

      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIcon
          name={right.icon}
          color="white"
          size={IconSize}
          backgroundColor="secondary"
          onPress={right.onPress}
        />
      ) : (
        <View />
      )}
    </Box>
  );
}
