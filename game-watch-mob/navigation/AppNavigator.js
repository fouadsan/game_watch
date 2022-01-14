import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./RootNavigator";
import { StartupScreen } from "../screens";

const AppNavigator = () => {
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  return (
    <NavigationContainer>
      {didTryAutoLogin && <RootNavigator />}
      {!didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
