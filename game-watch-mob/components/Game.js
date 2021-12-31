import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../utils/constants";

const Game = ({ name, poster, isCracked }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: poster }}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
          <View>
            {isCracked ? (
              <Text
                style={{
                  ...styles.text,
                  color: "green",
                }}
              >
                cracked
              </Text>
            ) : (
              <Text
                style={{
                  ...styles.text,
                  color: colors.primary,
                }}
              >
                uncracked
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.25,
    height: "100%",
    marginHorizontal: 2,
    backgroundColor: colors.drawer,
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    marginVertical: 2,
    color: colors.text,
    fontSize: 12,
    fontFamily: "open-sans",
    textAlign: "center",
  },

  text: {
    textAlign: "right",
    marginRight: 5,
    fontFamily: "open-sans",
    fontSize: 10,
    fontWeight: "700",
  },
});

export default Game;
