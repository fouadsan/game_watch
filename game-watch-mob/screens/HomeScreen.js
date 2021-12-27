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

function HomeScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {
    genres_loading: loading,
    genres_error: error,
    genres,
  } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const loadGenres = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(genresActions.fetchGenres());
    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    loadGenres();
  }, [loadGenres]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <StatusBar style="auto" />
      </View>
    );
  }

  if (error.is_occured) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>{error.msg}</Text>
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
          <GameList id={itemData.item.id} name={itemData.item.name} />
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
    fontFamily: "open-sans",
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
});

export default HomeScreen;
