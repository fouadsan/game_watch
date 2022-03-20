import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import { colors } from "../utils/constants";
import * as authActions from "../store/actions/auth";

const StartupScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.removeItem("userData");
      if (!userData) {
        // props.navigation.navigate('Auth');
        dispatch(authActions.setDidTryAL());
        return;
      }

      const transformedData = JSON.parse(userData);
      const { accessToken, refreshToken, expiryDate, userId } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (
        expirationDate <= new Date() ||
        !accessToken ||
        !refreshToken ||
        !userId
      ) {
        // props.navigation.navigate('Auth');
        dispatch(authActions.setDidTryAL());
        return;
      }

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      // props.navigation.navigate('Shop');
      dispatch(
        authActions.authenticate(
          accessToken,
          refreshToken,
          expirationTime,
          userId
        )
      );
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
