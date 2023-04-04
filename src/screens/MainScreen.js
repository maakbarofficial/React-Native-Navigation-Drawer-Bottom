import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../sidescreens/Home";
import ShareApp from "../sidescreens/ShareApp";
import Sidebar from "../Sidebar";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="React Native Navigation"
        component={Home}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="ShareApp"
        component={ShareApp}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;
