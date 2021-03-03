import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Box, Text } from "../../components";

import BorderTap from "./BorderTap";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

export type CategoryProps = {
  id: string;
  title: string;
  color: string;
};

interface Props {
  category: CategoryProps;
}

export default function Category({ category: { color, title } }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <BorderTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          style={{
            width: OUTER_RADIUS * 2,
            height: OUTER_RADIUS * 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selected && (
            <Box
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: color,
                borderWidth: 1,
              }}
            />
          )}
          <Box
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderTap>
  );
}
