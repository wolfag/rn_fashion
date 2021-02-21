import { AntDesign, Zocial, Ionicons } from "@expo/vector-icons";
import React, { ReactNode } from "react";

import { Box, theme } from "../../components";

const SIZE = theme.borderRadii.l * 2;

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius={"l"}
      justifyContent="center"
      alignItems="center"
      marginHorizontal="s"
    >
      {children}
    </Box>
  );
};

export default function SocialLogin() {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Zocial name="facebook" size={24} color="black" />
      </SocialIcon>
      <SocialIcon>
        <AntDesign name="google" size={24} color="black" />
      </SocialIcon>
      <SocialIcon>
        <Ionicons name="md-logo-apple" size={24} color="black" />
      </SocialIcon>
    </Box>
  );
}
