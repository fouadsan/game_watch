import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import TouchableCmp from "./UI/TouchableCmp";

const FavGame = ({ posterUrl, onSelect }) => {
  return (
    <TouchableCmp onPress={onSelect}>
      <View
        style={{
          flex: 1,
          margin: 1,
        }}
      >
        <Image style={styles.image} source={{ uri: posterUrl }} />
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").width / 3.5,
    width: Dimensions.get("window").width / 4.1,
  },
});

export default FavGame;
