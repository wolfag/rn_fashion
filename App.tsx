import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { AppRoutes } from "./src/components/Navigation";
import { theme } from "./src/components/Theme";
import { HomeNavigator } from "./src/Home";

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
