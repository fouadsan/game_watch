import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const Error = ({ msg, onPressHandler }) => {
  return (
    <View style={styles.centered}>
      <Text style={styles.text}>{msg}</Text>
      <Button
        title="Try again"
        onPress={onPressHandler}
        color={colors.primary}
      />
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

export default Error;
