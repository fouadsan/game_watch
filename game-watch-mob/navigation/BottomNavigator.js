import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GamesNavigator from "./GameNavigator";
import { FavoritesScreen } from "../screens";
import { colors } from "../utils/constants";

const defaultTabOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopColor: colors.blackOpacity,
  },
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "ios-home";
    } else if (route.name === "Favorites") {
      iconName = "ios-heart";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colors.text,
  tabBarInactiveTintColor: colors.whiteOpacity,
  tabBarActiveBackgroundColor: colors.primary,
});

const BottomTabNavigator = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <BottomTabNavigator.Navigator screenOptions={defaultTabOptions}>
      <BottomTabNavigator.Screen name="Home" component={GamesNavigator} />
      <BottomTabNavigator.Screen name="Favorites" component={FavoritesScreen} />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomNavigator;
