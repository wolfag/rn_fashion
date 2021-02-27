import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

const { width, height } = Dimensions.get("window");
const aspectRatio = 980 / 1400;
const imgHeight = width * aspectRatio;
const headerHeight = imgHeight * 0.61;

interface Props {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

export const assets = [
  require("../../assets/imgs/patterns/1.jpg"),
  require("../../assets/imgs/patterns/2.jpg"),
  require("../../assets/imgs/patterns/3.jpg"),
];

export default function Container({ children, footer, pattern }: Props) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          height + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={headerHeight}
          >
            <Image
              source={asset}
              style={{
                width,
                height: imgHeight,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height: imgHeight,
              top: headerHeight * -1,
            }}
          />
          <Box
            flex={1}
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
}
