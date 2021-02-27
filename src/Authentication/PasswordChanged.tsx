import React from "react";

import { Box, Button, Container, RoundedIcon, Text } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

export default function PasswordChanged({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) {
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
            iconSize={50}
          />
          {/* <Box
            backgroundColor="primaryLight"
            style={{
              width: SIZE,
              height: SIZE,
              borderRadius: SIZE / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text color="primary">
              <Feather name="check" size={50} />
            </Text>
          </B> */}
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
