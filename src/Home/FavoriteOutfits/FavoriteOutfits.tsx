import React, { useRef, useState } from "react";
import { Dimensions, LayoutChangeEvent, ScrollView } from "react-native";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";

import { Box, Header, TopCurve, useTheme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Footer from "./Footer";
import Outfit, { OutfitProps } from "./Outfit";

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits: OutfitProps[] = [
  {
    id: 1,
    color: "#bfeaf5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#beecc4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#ffe4d9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#ffdddd",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#bfeaf5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#f3f0ef",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#d5c3bb",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#deefc4",
    aspectRatio: 160 / 145,
    selected: false,
  },
];

export default function FavoriteOutfits({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 2 - theme.spacing.m) / 2;
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);
  const transition = (
    <Transition.Change interpolation="easeInOut" durationMs={1000} />
  );
  const listRef = useRef<TransitioningView>(null);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={listRef} {...{ transition }}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter(({ id }) => id % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter(({ id }) => id % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve {...{ footerHeight }} />
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          onLayout={({ nativeEvent }: LayoutChangeEvent) => {
            setFooterHeight(nativeEvent.layout.height);
          }}
        >
          <Footer
            onPress={() => {
              listRef?.current?.animateNextTransition();
              setOutfits(outfits.filter((item) => !item.selected));
            }}
            label="Add to Favorites"
          />
        </Box>
      </Box>
    </Box>
  );
}
