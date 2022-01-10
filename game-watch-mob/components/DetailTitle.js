import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/constants";

const DetailTitle = (props) => {
  return <Text style={{ ...styles.title, ...props.style }}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "open-sans",
    fontWeight: "700",
    color: colors.primary,
  },
});

export default DetailTitle;
