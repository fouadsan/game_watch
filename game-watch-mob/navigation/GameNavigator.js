import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, GameDetailScreen } from "../screens";
import { colors } from "../utils/constants";

const GameStackNavigator = createStackNavigator();

const GameNavigator = () => {
  return (
    <GameStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <GameStackNavigator.Screen name="Home Screen" component={HomeScreen} />
      <GameStackNavigator.Screen
        name="Detail Screen"
        component={GameDetailScreen}
      />
    </GameStackNavigator.Navigator>
  );
};

export default GameNavigator;
