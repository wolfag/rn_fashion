import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Text, Button } from "../../components";

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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    marginTop: 40,
  },
  subtitle: {
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
  },
});
