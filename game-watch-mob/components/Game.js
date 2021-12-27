import React from "react";
import { View, Image, Dimensions, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const Game = ({ name, poster, isCracked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: poster }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
        <View>
          {isCracked ? (
            <Text
              style={{
                ...styles.text,
                color: "green",
              }}
            >
              cracked
            </Text>
          ) : (
            <Text
              style={{
                ...styles.text,
                color: colors.primary,
              }}
            >
              uncracked
            </Text>
          )}
        </View>
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
    fontSize: 14,
    marginVertical: 2,
    color: colors.text,
    textAlign: "center",
  },

  text: {
    textAlign: "right",
    marginRight: 5,
    fontFamily: "open-sans",
    fontSize: 12,
    fontWeight: "700",
  },
});

export default Game;
