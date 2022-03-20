import { View, Text } from "react-native";
import React from "react";

import Toast from "react-native-root-toast";

const ToastCmp = ({ message, duration }) => {
  console.log("toast");
  return (
    <View>
      <Toast visible={true}>Thanks for subscribing!</Toast>
    </View>
  );
};

export default ToastCmp;
