import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import MediaItem from "./MediaItem";

const MediaDetail = ({ screenshots, artworks }) => {
  return (
    <View style={styles.container}>
      {screenshots && <MediaItem title={"Screenshots"} source={screenshots} />}
      {artworks && <MediaItem title={"Artworks"} source={artworks} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height * 0.7,
  },
});

export default MediaDetail;
