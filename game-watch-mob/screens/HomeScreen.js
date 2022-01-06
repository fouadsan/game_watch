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

import { GameList, Loading, Error } from "../components";
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
    await dispatch(genresActions.fetchGenres());
  }, [dispatch]);

  const loadGames = useCallback(async () => {
    await dispatch(gamesActions.fetchGames());
  }, [dispatch]);

  const loadGamesContent = async () => {
    setIsRefreshing(true);
    await loadGenres();
    await loadGames();
    setIsRefreshing(false);
  };

  useEffect(() => {
    const unsubscribeContent = props.navigation.addListener(
      "focus",
      loadGamesContent
    );
    return () => {
      unsubscribeContent();
    };
  }, [loadGamesContent]);

  if (genres_loading || games_loading) {
    return <Loading />;
  }

  if (genres_error.is_occured || games_error.is_occured) {
    return <Error msg={genres_error.msg} onPressHandler={loadGamesContent} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        onRefresh={loadGamesContent}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        data={genres}
        renderItem={(itemData) => (
          <GameList
            id={itemData.item.id}
            name={itemData.item.name}
            games={games.filter((game) => game.genre === itemData.item.id)}
            navigation={props.navigation}
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
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
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
