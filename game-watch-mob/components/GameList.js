import React, { useEffect, useState } from "react";
import { View, Dimensions, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import Game from "./Game";
import { colors } from "../utils/constants";

const GameList = ({ id, name }) => {
  const games = useSelector((state) => state.games.games);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    setGameList((currentState) => {
      return games.filter((game) => game.genreId === id);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={gameList}
          renderItem={(itemData) => (
            <Game
              name={itemData.item.name}
              genreId={itemData.item.genreId}
              poster={itemData.item.poster}
              isCracked={itemData.item.isCracked}
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
