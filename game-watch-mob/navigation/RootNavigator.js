import React from "react";

import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, SafeAreaView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BottomNavigator from "./BottomNavigator";
import { colors } from "../utils/constants";
import { DrawerHeader, DrawerFooter } from "../components";

const defaultDrawerOptions = {
  drawerStyle: {
    backgroundColor: colors.drawer,
    flex: 1,
  },

  headerStyle: {
    backgroundColor: colors.drawer,
  },

  headerTintColor: colors.primary,
  drawerActiveBackgroundColor: colors.blackOpacity,
  drawerInactiveTintColor: colors.text,
  drawerActiveTintColor: colors.text,

  drawerItemStyle: {
    width: "100%",
    marginLeft: 0,
    paddingHorizontal: 10,
    borderRadius: 0,
  },

  drawerLabelStyle: {
    fontFamily: "open-sans",
  },
};

const DrawerNavigator = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "alwas", horizontal: "never" }}>
              <View style={{ height: "97%" }}>
                <DrawerHeader />
                <DrawerItemList {...props} />
                <Button
                  title="logout"
                  color={colors.primary}
                  onPress={() => {}}
                />
              </View>
              <DrawerFooter />
            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={defaultDrawerOptions}
    >
      <DrawerNavigator.Screen
        name="Games"
        component={BottomNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={"ios-game-controller"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default RootNavigator;
