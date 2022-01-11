import React from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";

import Input from "../components/UI/Input";
import { colors } from "../utils/constants";
import AuthBtn from "../components/AuthBtn";

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <ScrollView>
        <View style={styles.logo}>
          <Text>logo</Text>
        </View>
        <View style={styles.container}>
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={() => {}}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={() => {}}
            initialValue=""
          />
          <AuthBtn title={"Login"} bgColor={"transparent"} />
          <AuthBtn title={"Signup Instead"} bgColor={colors.primary} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
  },

  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});

export default AuthScreen;
