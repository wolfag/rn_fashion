import React from "react";

import { Box, Text } from "../../components";

import { Point } from "./Graph";

interface Props {
  transaction: Point;
}

export default function Transaction({
  transaction: { id, date, value, color },
}: Props) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="xl"
    >
      <Box>
        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor={color}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
            }}
            marginRight="s"
          />
          <Text variant="title3">{`#${id}`}</Text>
        </Box>
        <Box>
          <Text>{`$${value} - ${new Date(date).toLocaleDateString()}`}</Text>
        </Box>
      </Box>
      <Box>
        <Text color="secondary">See more</Text>
      </Box>
    </Box>
  );
}
