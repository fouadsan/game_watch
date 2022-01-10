import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const MediaImage = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        resizeMode="stretch"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: 100,
    margin: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default MediaImage;
