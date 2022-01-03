import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameDetailScreen = (props) => {
  const gameId = props.route.params.gameId;
  return (
    <View style={styles.screen}>
      <Text>Detail Screen {gameId}</Text>
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

export default GameDetailScreen;
