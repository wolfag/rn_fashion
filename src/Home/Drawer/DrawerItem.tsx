import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, RoundedIcon, Text, Theme, useTheme } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: keyof HomeRoutes;
  label: string;
}

export default function DrawerItem({
  icon,
  color,
  screen,
  label,
}: DrawerItemProps) {
  const theme = useTheme();

  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();

  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() => navigation.navigate(screen)}
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          size={36}
          iconRatio={0.5}
          name={icon}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
}
