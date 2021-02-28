import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import img from "../../../assets/imgs/patterns/1.jpg";
import { Box, RoundedIcon, Text, useTheme } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width;

const aspectRatio = 980 / 1400;
const imgHeight = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "red",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "orange",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

export default function DrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingHorizontal="m"
          style={{
            paddingTop: insets.top,
          }}
        >
          <RoundedIcon
            name="x"
            color="white"
            size={25}
            backgroundColor="secondary"
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIcon
            name="shopping-bag"
            color="white"
            size={25}
            backgroundColor="secondary"
          />
        </Box>
      </Box>
      <Box flex={1}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Image
          source={img}
          style={{
            width: DRAWER_WIDTH,
            height: imgHeight,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -imgHeight * 0.61,
          }}
        />
        <Box
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          padding="xl"
          justifyContent="center"
        >
          <Box
            backgroundColor="primary"
            style={{
              borderRadius: 50,
              width: 100,
              height: 100,
              alignSelf: "center",
              position: "absolute",
              top: -50,
            }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Tai Nguyen
            </Text>
            <Text variant="button" textAlign="center">
              taiminhnguyen91@gmail.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        flex={0.1}
        backgroundColor="white"
        width={DRAWER_WIDTH}
        height={imgHeight}
      >
        <Image
          source={img}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
}
