import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  variant: "primary" | "default";
  label: string;
  onPress: () => void;
}

function Button({ label, variant, onPress }: Props) {
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "#fff" : "#0c0d34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
}

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});
