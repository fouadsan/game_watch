import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as gamesActions from "../store/actions/games";
import { colors } from "../utils/constants";

function FavoritesScreen(props) {
  const {
    games_loading: loading,
    games_error: error,
    games,
  } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const loadGames = useCallback(async () => {
    console.log("start");
    await dispatch(gamesActions.fetchGames(1));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGames);
    return () => {
      unsubscribe();
    };
  }, [loadGames]);
  console.log(games);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: colors.text,
  },
});

export default FavoritesScreen;
