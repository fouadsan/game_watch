import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import DetailTitle from "./DetailTitle";
import TouchableCmp from "./UI/TouchableCmp";
import { colors } from "../utils/constants";

const MainDetailDesc = ({ title, paragraph }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={styles.article}>
      <DetailTitle title={title} />
      <Text
        style={styles.paragraph}
        numberOfLines={isExpanded ? 15 : 3}
        ellipsizeMode="tail"
      >
        {paragraph}
      </Text>
      <View style={styles.row}>
        <TouchableCmp onPress={() => setIsExpanded(!isExpanded)}>
          <View style={styles.readMoreContainer}>
            <Text style={styles.readMore}>{isExpanded ? "less" : "more"}</Text>
          </View>
        </TouchableCmp>
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

  paragraph: {
    fontFamily: "open-sans",
    color: colors.text,
  },

  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
  },

  readMoreContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colors.drawer,
  },

  readMore: {
    fontFamily: "open-sans",
    color: colors.text,
  },
});

export default MainDetailDesc;
