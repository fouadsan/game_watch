import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const Loading = () => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={colors.primary} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default Loading;
