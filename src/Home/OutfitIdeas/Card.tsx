import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { mixColor, mix, usePanGestureHandler } from "react-native-redash";

import { Box } from "../../components";

import { useSpring } from "./Animations";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

interface Props {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

export default function Card({ position, onSwipe, source, step }: Props) {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const backgroundColor = mixColor(position, "#c9e9e7", "#74bcb8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imgScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
            overflow: "hidden",
          }}
        >
          <Animated.Image
            {...{ source }}
            resizeMode="contain"
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imgScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
}
