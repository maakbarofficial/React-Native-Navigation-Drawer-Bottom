import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../bottomtabs/HomeTab";
import JoinUs from "../bottomtabs/JoinUs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();

const Home = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Entypo name="home" size={30} color="black" />,
          headerShown: false,
        }}
      />
      <Bottom.Screen
        name="JoinUs"
        component={JoinUs}
        options={{
          tabBarLabel: "Join Us",
          tabBarIcon: () => (
            <MaterialIcons name="announcement" size={30} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Bottom.Navigator>
  );
};

export default Home;
