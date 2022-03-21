import { View, Text } from "react-native";
import React from "react";

import Toast from "react-native-root-toast";

const ToastCmp = ({ showToast }) => {
  return (
    <View>
      <Toast visible={showToast.is_visible}>{showToast.msg}</Toast>
    </View>
  );
};

export default ToastCmp;
