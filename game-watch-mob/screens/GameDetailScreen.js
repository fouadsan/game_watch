import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import * as singleGameActions from "../store/actions/singleGame";
import { Loading, Error } from "../components";
import { colors } from "../utils/constants";

const GameDetailScreen = (props) => {
  const gameId = props.route.params.gameId;

  const {
    game_loading: loading,
    game_error: error,
    game,
  } = useSelector((state) => state.singleGame);
  const dispatch = useDispatch();

  const loadGame = useCallback(async () => {
    await dispatch(singleGameActions.fetchGame(gameId));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGame);
    return () => {
      unsubscribe();
    };
  }, [loadGame]);

  if (loading) {
    return <Loading />;
  }

  if (error.is_occured) {
    return <Error msg={error.msg} onPressHandler={loadGame} />;
  }

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: game.image }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.headerRow}>
          <View style={styles.element}>
            <Ionicons name="ios-arrow-back" size={25} color="white" />
          </View>

          <View style={styles.element}>
            <Ionicons name="ios-heart-outline" size={25} color="white" />
          </View>
        </View>
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              The Witcher 3: Wild Hunt Wild Hunt Wild Hunt
            </Text>
          </View>

          <View style={styles.element}>
            <Ionicons name="ios-heart-outline" size={25} color="white" />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: game.poster }}
              resizeMode="stretch"
              style={styles.image}
            />
          </View>
          <View style={styles.infoColumn}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  background: {
    justifyContent: "space-between",
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  element: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    maxWidth: Dimensions.get("window").width * 0.8,
  },

  title: {
    fontSize: 18,
    fontFamily: "open-sans",
    fontWeight: "700",
    textTransform: "capitalize",
    color: colors.text,
  },

  infoContainer: {
    borderWidth: 1,
    borderColor: "red",
    height: Dimensions.get("window").height * 0.2,
  },

  info: {
    flexDirection: "row",
    height: "80%",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "yellow",
  },

  posterContainer: {
    height: "100%",
    width: "20%",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameDetailScreen;
