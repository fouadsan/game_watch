import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as gamesActions from "../store/actions/games";
import { colors } from "../utils/constants";
import { Loading, Error } from "../components";
import { Game } from "../components";

function FavoritesScreen(props) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {
    games_loading: loading,
    games_error: error,
    games,
  } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user_id);

  const onSelectHandler = (id) => {
    navigation.navigate("Detail Screen", {
      gameId: id,
    });
  };

  const loadGames = useCallback(async () => {
    console.log("start");
    await dispatch(gamesActions.fetchGames(userId));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGames);
    return () => {
      unsubscribe();
    };
  }, [loadGames]);

  if (loading) {
    return <Loading />;
  }

  if (error.is_occured) {
    return <Error msg={error.msg} onPressHandler={loadGames} />;
  }

  console.log(games);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          onRefresh={loadGames}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          data={games}
          renderItem={(itemData) => (
            <Game
              name={itemData.item.name}
              posterUrl={itemData.item.poster}
              isCracked={itemData.item.isCracked}
              onSelect={() => onSelectHandler(itemData.item.id)}
            />
          )}
          //Setting the number of column
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  list: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default FavoritesScreen;
