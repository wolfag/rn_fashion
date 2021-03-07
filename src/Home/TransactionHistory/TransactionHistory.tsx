import React from "react";

import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { Point } from "./Graph";

const data: Point[] = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 90,
    color: "primary",
  },
  {
    date: new Date("2019-10-01").getTime(),
    value: 10,
    color: "red",
  },
  {
    date: new Date("2019-11-01").getTime(),
    value: 31,
    color: "orange",
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 29,
    color: "yellow",
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 55,
    color: "pink",
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 40,
    color: "violet",
  },
  {
    date: new Date("2020-03-01").getTime(),
    value: 60,
    color: "grey",
  },
];

export default function TransactionHistory({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="transaction history"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              Total spend
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph {...{ data }} />
      </Box>
    </Box>
  );
}
