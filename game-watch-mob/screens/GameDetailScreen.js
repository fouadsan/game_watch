import React from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GameDetailScreen = (props) => {
  const gameId = props.route.params.gameId;
  return (
    <View style={styles.screen}>
      <ImageBackground source={"image"} resizeMode="cover" style={styles.image}>
        <View style={styles.btn}>
          <Ionicons name="ios-arrow-back" size={25} color="white" />
        </View>

        <View style={styles.btn}>
          <Ionicons name="ios-heart" size={25} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  image: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "30%",
    borderWidth: 1,
    borderColor: "yellow",
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "green",
    width: "10%",
    height: "20%",
  },

  imgContainer: {},
});

export default GameDetailScreen;
