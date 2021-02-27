import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Text, Theme } from "./Theme";

interface Props {
  variant: "primary" | "default" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
  disabled?: boolean;
}

function Button({ label, variant, onPress, children, disabled }: Props) {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "default"
      ? theme.colors.grey
      : "transparent";
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  if (variant === "transparent") {
    return (
      <BorderlessButton enabled={!disabled} {...{ onPress }}>
        {children || (
          <Text variant="button" style={[styles.label, { color }]}>
            {label}
          </Text>
        )}
      </BorderlessButton>
    );
  }

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      enabled={!disabled}
      {...{ onPress }}
    >
      {children || (
        <Text variant="button" style={[styles.label, { color }]}>
          {label}
        </Text>
      )}
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
