import React from "react";
import { View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import TouchableCmp from "./TouchableCmp";
import { colors } from "../../utils/constants";

const HeaderButton = ({ iconName, iconSize, onPress }) => {
  return (
    <View>
      <TouchableCmp onPress={onPress}>
        <View>
          <Ionicons name={iconName} size={iconSize} color={colors.text} />
        </View>
      </TouchableCmp>
    </View>
  );
};

export default HeaderButton;
