import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

function DrawerHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Watch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },

  title: {
    color: colors.text,
    fontFamily: "open-sans-bold",
  },
});

export default DrawerHeader;
