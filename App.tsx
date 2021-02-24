import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
