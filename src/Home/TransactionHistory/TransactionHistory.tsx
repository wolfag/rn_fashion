import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { Point } from "./Graph";
import Transaction from "./Transaction";

const minDate = new Date("2019-09-01").getTime();
const maxDate = new Date("2020-03-01").getTime();

const data: Point[] = [
  {
    date: new Date("2019-11-01").getTime(),
    value: 139.42,
    color: "primary",
    id: 245673,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: "orange",
    id: 245672,
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 198.54,
    color: "yellow",
    id: 245674,
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
        <Graph {...{ data, minDate, maxDate }} />
        <ScrollView>
          {data.map((transaction) => (
            <Transaction key={transaction.id} {...{ transaction }} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
}
