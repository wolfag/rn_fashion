import React from "react";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text, useTheme } from "../index";

interface Props {
  label: string;
  checked: boolean;
  onChange?: () => void;
}

export default function Checkbox({ label, checked, onChange }: Props) {
  const theme = useTheme();
  const reColor: keyof typeof theme.colors = checked ? "primary" : "text";
  const color = theme.colors[reColor];

  return (
    <BorderlessButton
      onPress={() => onChange && onChange()}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box marginRight="m">
          <Feather
            name={checked ? "check-square" : "square"}
            {...{ color }}
            size={20}
          />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
}
