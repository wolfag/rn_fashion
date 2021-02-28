import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIcon from "./RoundedIcon";
import { Box, Text, Theme } from "./Theme";

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
  dark: boolean;
}

const IconSize = 24;

function Header({ title, left, right, dark }: Props) {
  const insets = useSafeAreaInsets();
  const color: keyof Theme["colors"] = dark ? "white" : "secondary";

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
          size={IconSize}
          backgroundColor="transparent"
          onPress={left.onPress}
          {...{ color }}
        />
      ) : (
        <View />
      )}

      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIcon
          name={right.icon}
          size={IconSize}
          backgroundColor="transparent"
          onPress={right.onPress}
          {...{ color }}
        />
      ) : (
        <View />
      )}
    </Box>
  );
}
Header.defaultProps = {
  dark: false,
};

export default Header;
