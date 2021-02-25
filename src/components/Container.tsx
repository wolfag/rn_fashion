import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme } from "./Theme";

const { width } = Dimensions.get("window");
const aspectRatio = 980 / 1400;
const height = width * aspectRatio;
const headerHeight = height * 0.61;

interface Props {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require("../Authentication/assets/patterns/1.jpg")];

export default function Container({ children, footer }: Props) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={headerHeight}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: headerHeight * -1,
          }}
        />
        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
}
