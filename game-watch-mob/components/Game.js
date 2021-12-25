import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const Game = ({ name, poster, isCracked }) => {
  return (
    <View style={styles.container}>
      <Text>Game Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drawer,
    marginHorizontal: 2,
  },
});

export default Game;
