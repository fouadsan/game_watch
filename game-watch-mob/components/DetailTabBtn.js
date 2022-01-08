import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import TouchableCmp from "./UI/TouchableCmp";
import { colors } from "../utils/constants";

const DetailTabBtn = ({ title, isSelected, onSelect }) => {
  return (
    <TouchableCmp onPress={() => onSelect(title)}>
      <View
        style={{
          ...styles.tab,
          borderBottomWidth: isSelected ? 2 : null,
          borderBottomColor: isSelected ? colors.text : null,
        }}
      >
        <Text style={styles.tabTitle}>{title}</Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  tab: {
    width: "40%",
    alignItems: "center",
    paddingBottom: 5,
  },

  tabTitle: {
    fontFamily: "open-sans",
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
});

export default DetailTabBtn;
