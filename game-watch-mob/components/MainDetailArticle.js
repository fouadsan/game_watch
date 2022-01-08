import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DetailTitle from "./DetailTitle";
import { colors } from "../utils/constants";

const MainDetailArticle = ({ title, name }) => {
  return (
    <View style={styles.article}>
      <DetailTitle title={title} />
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    margin: 10,
  },

  title: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "open-sans",
    fontWeight: "700",
    color: colors.primary,
  },

  card: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.drawer,
  },

  name: {
    fontFamily: "open-sans",
    color: colors.text,
  },
});

export default MainDetailArticle;
