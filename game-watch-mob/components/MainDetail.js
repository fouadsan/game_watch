import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MainDetailArticle from "./MainDetailArticle";
import MainDetailDesc from "./MainDetailDesc";
import DetailGridItem from "./DetailGridItem";

const MainDetail = ({
  description,
  developer,
  publisher,
  gameModes,
  gameEngines,
  playerPerspective,
  themes,
  storyline,
}) => {
  const data = [
    {
      id: 1,
      title: "Game Modes",
      name: gameModes[0].name,
    },
    {
      id: 2,
      title: "Game Engines",
      name: gameEngines[0].name,
    },
    {
      id: 3,
      title: "Player Perspective",
      name: playerPerspective[0].name,
    },
    {
      id: 4,
      title: "Themes",
      name: themes[0].name,
    },
  ];

  return (
    <View style={styles.container}>
      <MainDetailDesc title={"Description"} paragraph={description} />
      <MainDetailArticle title={"Developer"} name={developer} />
      <MainDetailArticle title={"Publisher"} name={publisher} />
      <FlatList
        horizontal
        data={data}
        renderItem={(itemData) => (
          <DetailGridItem
            title={itemData.item.title}
            text={itemData.item.name}
          />
        )}
        contentContainerStyle={styles.gridList}
      />
      <MainDetailDesc title={"Storyline"} paragraph={storyline} />
    </View>
  );
};

const styles = StyleSheet.create({
  gridList: {
    margin: 10,
  },
});

export default MainDetail;
