import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import DetailTitle from "./DetailTitle";
import { colors } from "../utils/constants";

const DetailGridItem = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <DetailTitle title={title} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: Dimensions.get("window").width / 15,
  },

  text: {
    fontFamily: "open-sans",
    color: colors.text,
  },
});

export default DetailGridItem;
