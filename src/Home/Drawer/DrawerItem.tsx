import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, RoundedIcon, Text, Theme, useTheme } from "../../components";

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
}

export default function DrawerItem({
  icon,
  color,
  screen,
  label,
}: DrawerItemProps) {
  const theme = useTheme();

  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
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
