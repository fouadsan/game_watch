import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";

import TouchableCmp from "./UI/TouchableCmp";
import { colors } from "../utils/constants";

const AuthBtn = ({ title, bgColor, isLoading, onSelect, formIsValid }) => {
  return (
    <View style={styles.btnContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <TouchableCmp onPress={formIsValid ? onSelect : () => {}}>
          <View
            style={{
              ...styles.button,
              backgroundColor: bgColor,
              opacity: formIsValid ? 1 : 0.3,
            }}
          >
            <Text style={styles.btnStyle}>{title}</Text>
          </View>
        </TouchableCmp>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: Dimensions.get("window").height / 20,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    width: "50%",
    height: 50,
  },

  btnStyle: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: colors.text,
  },
});

export default AuthBtn;
