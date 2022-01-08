import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const MediaDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Media Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height * 0.7,
  },
});

export default MediaDetail;
