import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import TouchableCmp from "./UI/TouchableCmp";
import MainDetailArticle from "./MainDetailArticle";
import MainDetailDesc from "./MainDetailDesc";
import DetailGridItem from "./DetailGridItem";

const data = [
  {
    id: 1,
    title: "Game Engine",
    text: "Unreal Engine",
  },
  {
    id: 2,
    title: "Game Modes",
    text: "First person, Third person",
  },
  {
    id: 3,
    title: "Player Perspective",
    text: "First person, Third person",
  },
  {
    id: 4,
    title: "game modes",
    text: "First person, third person",
  },
];

const MainDetail = (props) => {
  return (
    <View style={styles.container}>
      <MainDetailDesc
        title={"Description"}
        paragraph={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam qui quis debitis cupiditate non dolor officia earum modi, saepe mollitia distinctio vel eaque hic voluptatem quo ducimus pariatur, deserunt nostrum. Deleniti a ipsa possimus, vero, sunt harum iure fugiat consequuntur quos minima incidunt cum nobis enim, eaque ad itaque."
        }
      />
      <MainDetailArticle title={"Developer"} name={"Cd Project Red"} />
      <MainDetailArticle title={"Publisher"} name={"Cd Project"} />
      <FlatList
        horizontal
        data={data}
        renderItem={(itemData) => (
          <DetailGridItem
            title={itemData.item.title}
            text={itemData.item.text}
          />
        )}
        contentContainerStyle={styles.gridList}
      />
      <MainDetailDesc
        title={"Storyline"}
        paragraph={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam qui quis debitis cupiditate non dolor officia earum modi, saepe mollitia distinctio vel eaque hic voluptatem quo ducimus pariatur, deserunt nostrum. Deleniti a ipsa possimus, vero, sunt harum iure fugiat consequuntur quos minima incidunt cum nobis enim, eaque ad itaque."
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridList: {
    margin: 10,
  },
});

export default MainDetail;
