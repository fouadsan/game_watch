import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: colors.text,
  },
});

export default FavoritesScreen;
