import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput as Input, TextInputProps } from "react-native";

import { Box, useTheme } from "../Theme";

interface Props extends TextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

export default function TextInput({ icon, touched, error, ...props }: Props) {
  const theme = useTheme();

  const SIZE = theme.borderRadii.m * 2;
  const ICON_SIZE = 16;

  const reColor = error && touched ? "danger" : "primary";
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
      <Box padding="s">
        {<Feather name={icon} size={ICON_SIZE} {...{ color }} />}
      </Box>
      <Box flex={1}>
        <Input
          underlineColorAndroid="transparent"
          placeholderTextColor="#151624"
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          backgroundColor={error ? "danger" : "primary"}
          justifyContent="center"
          alignItems="center"
        >
          <Feather
            name={error ? "x-circle" : "check-circle"}
            size={ICON_SIZE}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
}
