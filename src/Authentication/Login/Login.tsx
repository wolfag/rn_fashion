import React from "react";
import { View } from "react-native";

import { Box, Button, Container, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";

export default function Login() {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => true}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don`t have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
}
