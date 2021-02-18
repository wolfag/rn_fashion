import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import { interpolateColor, onScrollEvent, useValue } from "react-native-redash";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don`t worry! Find the best outfit here!",
    color: "#bfeaf5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#beecc4",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#ffe4d9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#ffdddd",
  },
];

export default function Onboarding() {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({ color }) => color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
