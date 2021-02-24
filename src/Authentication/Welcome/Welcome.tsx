import React from "react";
import { Dimensions, Image } from "react-native";

import { Box, Text, Button, useTheme } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../assets/5.png"),
  width: 3383,
  height: 5074,
};
export const assets = [picture.src];

export default function Welcome({
  navigation,
}: StackNavigationProps<Routes, "Welcome">) {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image
          resizeMode="contain"
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title1" textAlign="center">
            Let`s started
          </Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            variant="default"
            label="Join us, it`s Free"
            onPress={() => true}
          />
          <Button
            variant="transparent"
            label="Forgot password"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Box>
  );
}
