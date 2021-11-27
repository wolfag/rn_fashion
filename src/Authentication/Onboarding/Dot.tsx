import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

interface Props {
  index: number;
  currentIndex: Animated.Node<number>;
}

export default function Dot({ index, currentIndex }: Props) {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 5, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const marginHorizontal = interpolate(currentIndex, {
    inputRange: [index -1, index, index+1],
    outputRange: [4, 30, 4],
    extrapolate: Extrapolate.CLAMP
  })
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#2cb9b0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        marginHorizontal,
        transform: [{ scale }],
      }}
    />
  );
}
