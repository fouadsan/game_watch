import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import GamesNavigator from "./GameNavigator";
import AuthNavigator from "./AuthNavigator";
import { FavoritesScreen } from "../screens";
import { colors } from "../utils/constants";

const defaultTabOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopColor: colors.blackOpacity,
  },

  tabBarLabelStyle: {
    fontFamily: "open-sans",
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
  const isAuth = useSelector((state) => !!state.auth.accessToken);
  return (
    <BottomTabNavigator.Navigator screenOptions={defaultTabOptions}>
      <BottomTabNavigator.Screen name="Home" component={GamesNavigator} />

      <BottomTabNavigator.Screen
        name="Favorites"
        component={isAuth ? FavoritesScreen : AuthNavigator}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomNavigator;
