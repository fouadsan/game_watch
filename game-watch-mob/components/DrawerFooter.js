import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

function DrawerFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Version: 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },

  title: {
    color: colors.text,
    opacity: 0.4,
    fontFamily: "open-sans",
  },
});

export default DrawerFooter;
