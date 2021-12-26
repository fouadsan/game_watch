import React from "react";
import { View, Image, Dimensions, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const Game = ({ name, poster, isCracked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/image1.jpg")}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          prince of persia warrior within
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.3,
    height: "100%",
    marginHorizontal: 2,
    backgroundColor: colors.drawer,
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 2,
    color: colors.text,
    textAlign: "center",
  },
});

export default Game;
