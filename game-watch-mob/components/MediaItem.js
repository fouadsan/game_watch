import React from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";

import DetailTitle from "./DetailTitle";
import MediaImage from "./MediaImage";

const MediaItem = ({ title, source }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DetailTitle title={title} style={{ marginLeft: 5 }} />
      <View style={styles.list}>
        <FlatList
          horizontal
          data={source}
          renderItem={(itemData) => (
            <>
              <MediaImage imageUrl={itemData.item.image} />
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  safe: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default MediaItem;
