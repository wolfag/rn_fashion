import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Onboarding } from "./src/Authentication";
import { LoadAssets } from "./src/components";


const fonts = {
  "SFProText-Bold": require("./assets/fonts/FontsFree-Net-SFProText-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/FontsFree-Net-SFProText-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/FontsFree-Net-SFProText-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
