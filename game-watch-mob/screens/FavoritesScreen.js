import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as gamesActions from "../store/actions/games";
import { colors } from "../utils/constants";
import { Loading, Error } from "../components";

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
    props.navigation.navigate("Detail Screen", {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        onRefresh={loadGames}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        data={games}
        renderItem={(itemData) => (
          <View
            style={{
              flex: 1,
              margin: 0,
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: itemData.item.poster }}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  list: {
    padding: 2,
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 3,
  },
});

export default FavoritesScreen;
