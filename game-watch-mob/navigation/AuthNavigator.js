import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthScreen } from "../screens";
import { colors } from "../utils/constants";

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <AuthStackNavigator.Screen name="Auth Screen" component={AuthScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
