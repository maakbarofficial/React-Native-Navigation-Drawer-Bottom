import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ height: 5, width: "100%", backgroundColor: "blue" }}
      ></View>
      <Image
        source={require("../assets/menu.png")}
        style={{ marginTop: 10, alignSelf: "center", width: 80, height: 80 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Muhammad Ali Akbar
      </Text>
      <View style={{ marginTop: 50, width: "100%" }}>
        <FlatList
          data={[
            { icon: require("../assets/menu.png"), title: "Home" },
            { icon: require("../assets/icon.png"), title: "Subscribe Us" },
            { icon: require("../assets/splash.png"), title: "Join Us" },
            { icon: require("../assets/menu.png"), title: "Share App" },
            { icon: require("../assets/menu.png"), title: "Rate Us" },
          ]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                }}
                onPress={() => {
                  navigation.closeDrawer();
                }}
              >
                <Image
                  source={item.icon}
                  style={{ marginLeft: 15, width: 24, height: 24 }}
                />
                <Text style={{ fontSize: 18, color: "black", marginLeft: 15 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Sidebar;
