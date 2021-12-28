import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { GameList } from "../components";
import { colors } from "../utils/constants";
import * as genresActions from "../store/actions/genres";
import * as gamesActions from "../store/actions/games";

function HomeScreen(props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { genres_loading, genres_error, genres } = useSelector(
    (state) => state.genres
  );

  const { games_loading, games_error, games } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();

  const loadGenres = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(genresActions.fetchGenres());
    setIsRefreshing(false);
  }, [dispatch]);

  const loadGames = useCallback(async () => {
    await dispatch(gamesActions.fetchGames());
    setGameList((currentState) => {
      return games.filter((game) => game.genre === id);
    });
  }, [dispatch]);

  useEffect(() => {
    const unsubscribeGenres = props.navigation.addListener("focus", loadGenres);
    const unsubscribeGames = props.navigation.addListener("focus", loadGames);
    return () => {
      unsubscribeGenres();
      unsubscribeGames();
    };
  }, [loadGenres, loadGames]);

  if (genres_loading || games_loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <StatusBar style="auto" />
      </View>
    );
  }

  if (genres_error.is_occured || games_error.is_occured) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>{genres_error.msg}</Text>
        <Button title="Try again" onPress={loadGenres} color={colors.primary} />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        onRefresh={loadGenres}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        data={genres}
        renderItem={(itemData) => (
          <GameList
            id={itemData.item.id}
            name={itemData.item.name}
            games={games}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  text: {
    marginBottom: 10,
    fontFamily: "open-sans",
    fontSize: 18,
    color: colors.text,
    textTransform: "capitalize",
  },
});

export default HomeScreen;
