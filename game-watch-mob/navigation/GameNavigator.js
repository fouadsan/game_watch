import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

const GameStackNavigator = createStackNavigator();

const GameNavigator = () => {
  return (
    <GameStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <GameStackNavigator.Screen name="Games Home" component={HomeScreen} />
    </GameStackNavigator.Navigator>
  );
};

export default GameNavigator;
