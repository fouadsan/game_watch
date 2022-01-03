import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import TouchableCmp from "./TouchableCmp";
import { colors } from "../../utils/constants";

const HeaderButton = ({ iconName, iconSize, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableCmp onPress={onPress}>
        <View>
          <Ionicons name={iconName} size={iconSize} color={colors.text} />
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: Dimensions.get("window").width / 30,
  },
});

export default HeaderButton;
