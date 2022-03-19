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
      name: gameModes ? gameModes[0].name : "",
    },
    {
      id: 2,
      title: "Game Engines",
      name: gameEngines ? gameEngines[0].name : "",
    },
    {
      id: 3,
      title: "Player Perspective",
      name: playerPerspective ? playerPerspective[0].name : "",
    },
    {
      id: 4,
      title: "Themes",
      name: themes ? themes[0].name : "",
    },
  ];

  return (
    <View style={styles.container}>
      <MainDetailDesc
        title={"Description"}
        paragraph={description ? description : "N/A"}
      />
      <MainDetailArticle
        title={"Developer"}
        name={developer ? developer : "N/A"}
      />
      <MainDetailArticle
        title={"Publisher"}
        name={publisher ? publisher : "N/A"}
      />
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
