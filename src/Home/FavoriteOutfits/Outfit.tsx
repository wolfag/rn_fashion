import React, { useState } from "react";

import { BorderlessTap, Box, RoundedIcon } from "../../components";

export interface OutfitProps {
  id: number;
  color: string;
  aspectRatio: number;
  selected: boolean;
}

interface Props {
  outfit: OutfitProps;
  width: number;
}

export default function Outfit({
  outfit: { color, aspectRatio },
  width,
  outfit,
}: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <BorderlessTap
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{ backgroundColor: color, width, height: width * aspectRatio }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="white"
            size={24}
          />
        )}
      </Box>
    </BorderlessTap>
  );
}
