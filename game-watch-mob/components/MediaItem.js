import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import DetailTitle from "./DetailTitle";
import MediaImage from "./MediaImage";

const data = [
  {
    id: 1,
    name: "god of war",
  },
  {
    id: 2,
    name: "god of war",
  },
  {
    id: 3,
    name: "god of war",
  },
  {
    id: 4,
    name: "god of war",
  },
  {
    id: 5,
    name: "god of war",
  },
];

const MediaItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <DetailTitle title={title} />
      <FlatList
        horizontal
        data={data}
        renderItem={(itemData) => <MediaImage name={itemData.item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default MediaItem;
