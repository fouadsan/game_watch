import React, { useEffect, useState, useCallback, useReducer } from "react";
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
import { useSelector, useDispatch } from "react-redux";

import Input from "../components/UI/Input";
import { colors } from "../utils/constants";
import AuthBtn from "../components/AuthBtn";
import SwitchAuthBtn from "../components/SwitchAuthBtn";
import * as authActions from "../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const [isSignup, setIsSignup] = useState(false);

  const {
    auth_loading: isLoading,
    auth_error: error,
    token,
    status,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      username: "",
      password: "",
    },
    inputValidities: {
      email: false,
      username: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error.is_occured) {
      Alert.alert("Error!", error.msg, [{ text: "Okay" }]);
    }
    if (status === "registered") {
      Alert.alert("registered!", "registration success", [{ text: "Okay" }]);
      // dispatch (login)
    }
  }, [error, status]);

  const handleAuth = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.username,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    await dispatch(action);
    if (status === "loggedIn") {
      props.navigation.navigate("Favorites");
    }
  };

  const handleInputChange = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
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
            onInputChange={handleInputChange}
            initialValue=""
          />
          {isSignup && (
            <Input
              id="username"
              label="Username"
              keyboardType="default"
              required
              autoCapitalize="none"
              errorText="Please enter a valid username."
              onInputChange={handleInputChange}
              initialValue=""
            />
          )}
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={handleInputChange}
            initialValue=""
          />
          <AuthBtn
            title={isSignup ? "SignUp" : "Login"}
            bgColor={"transparent"}
            isLoading={isLoading}
            onSelect={handleAuth}
          />
          <SwitchAuthBtn
            title={`Switch to ${isSignup ? "Login" : "Sign Up"}`}
            isLoading={isLoading}
            onSelect={() => {
              setIsSignup((prevState) => !prevState);
            }}
          />
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
    height: Dimensions.get("window").height / 6,
  },

  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});

export default AuthScreen;
