import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/constants";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  title: {
    color: colors.text,
  },
});

export default HomeScreen;
