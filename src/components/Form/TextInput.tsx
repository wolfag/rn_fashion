import { Feather } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import RoundedIcon from "../RoundedIcon";
import { Box, useTheme } from "../Theme";

export interface TextInputProps extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
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
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#151624"
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={error ? "x" : "check"}
            size={SIZE}
            color="white"
            backgroundColor={error ? "danger" : "primary"}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
