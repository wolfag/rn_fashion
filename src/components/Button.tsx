import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme";

interface Props {
  variant: "primary" | "default" | "transparent";
  label: string;
  onPress: () => void;
}

function Button({ label, variant, onPress }: Props) {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "default"
      ? theme.colors.grey
      : "transparent";
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.button;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={[styles.label, { color }]}>
        {label}
      </Text>
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
    textAlign: "center",
  },
});
