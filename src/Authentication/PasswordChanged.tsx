import React from "react";

import { Box, Button, Container, RoundedIcon, Text } from "../components";
import { AuthNavigationProps } from "../components/Navigation";

export default function PasswordChanged({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) {
  const SIZE = 80;

  const footer = (
    <Box flexDirection="row" justifyContent="center">
      <RoundedIcon
        size={60}
        backgroundColor="white"
        color="text"
        name="x"
        onPress={() => navigation.pop()}
      />
    </Box>
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box justifyContent="center" alignContent="center" flex={1}>
        <Box flexDirection="row" justifyContent="center" marginBottom="xl">
          <RoundedIcon
            backgroundColor="primaryLight"
            color="primary"
            size={SIZE}
            name="check"
            iconRatio={0.7}
          />
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom={"l"}>
          Close this window and login again
        </Text>

        <Box alignItems="center" marginBottom="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Login again"
          />
        </Box>
      </Box>
    </Container>
  );
}
