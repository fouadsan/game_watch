import React from "react";
import { View, Dimensions, Text, FlatList, StyleSheet } from "react-native";

import Game from "./Game";
import { colors } from "../utils/constants";

const GameList = ({ name, games, navigation }) => {
  const onSelectHandler = (id) => {
    navigation.navigate("Detail Screen", {
      gameId: id,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={games}
          renderItem={(itemData) => (
            <Game
              name={itemData.item.name}
              posterUrl={itemData.item.poster}
              isReleased={itemData.item.isReleased}
              onSelect={() => onSelectHandler(itemData.item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.3,
    marginVertical: Dimensions.get("window").height / 60,
    marginHorizontal: Dimensions.get("window").width / 40,
  },

  title: {
    marginVertical: Dimensions.get("window").height / 60,
    marginHorizontal: Dimensions.get("window").width / 40,
    color: colors.primary,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textTransform: "capitalize",
  },

  list: {
    flex: 1,
  },
});

export default GameList;
