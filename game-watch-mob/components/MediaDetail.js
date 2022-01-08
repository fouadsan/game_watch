import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import MediaItem from "./MediaItem";

const MediaDetail = () => {
  return (
    <View style={styles.container}>
      <MediaItem title={"Screenshots"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height * 0.7,
  },
});

export default MediaDetail;
