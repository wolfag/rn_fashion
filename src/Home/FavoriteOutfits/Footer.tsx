import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Button } from "../../components";

interface Props {
  label: string;
  onPress: () => void;
}

export default function Footer({ label, onPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Box backgroundColor="secondary" padding="m" borderTopLeftRadius="xl">
      <Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
        <Button variant="primary" {...{ label, onPress }} />
      </Box>
    </Box>
  );
}
