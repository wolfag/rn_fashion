import React from "react";
import { Image, StyleSheet } from "react-native";

import { Box, useTheme } from "../../components";

export default function Background() {
  const theme = useTheme();

  return (
    <Box
      flex={1}
      style={StyleSheet.absoluteFillObject}
      backgroundColor="secondary"
    >
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>

      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("../../../assets/imgs/patterns/1.jpg")}
          style={{
            width: undefined,
            height: undefined,
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue" overflow="hidden">
        <Image
          source={require("../../../assets/imgs/patterns/1.jpg")}
          style={{
            width: undefined,
            height: undefined,
          }}
        />
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </Box>
  );
}
