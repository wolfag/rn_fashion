import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import { Button } from "../../components";
const { height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;

interface Props {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

export default function Subslide({
  subtitle,
  description,
  last,
  onPress,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let`s get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0c0d34",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0c0d34",
    textAlign: "center",
    marginBottom: 40,
  },
});
