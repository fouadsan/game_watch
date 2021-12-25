import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { GameList } from "../components";
import { colors, GENRES } from "../utils/constants";

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {GENRES.map((gen) => {
          const { id, name } = gen;
          return <GameList key={id} id={id} name={name} />;
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
