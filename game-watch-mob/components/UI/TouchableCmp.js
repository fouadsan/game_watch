import React, { Children } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";

const TouchableCmp = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onPress} background={props.background}>
      {props.children}
    </TouchableCmp>
  );
};

export default TouchableCmp;
