import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface Props {
  onPress: () => void;
  title: string;
  action: string;
}

export default function Footer({ onPress, title, action }: Props) {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton {...{ onPress }}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
}
