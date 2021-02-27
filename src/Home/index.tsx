import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={<View />} />
  </Drawer.Navigator>
);
