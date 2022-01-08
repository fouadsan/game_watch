import React from "react";
import { View, StyleSheet } from "react-native";

import DetailTabBtn from "./DetailTabBtn";

const DetailTabs = ({ isMedia, setIsMedia }) => {
  const handleSwitch = (title) => {
    if (title === "Media") {
      setIsMedia(true);
    } else {
      setIsMedia(false);
    }
  };

  return (
    <View style={styles.container}>
      <DetailTabBtn
        title={"Main"}
        isSelected={!isMedia}
        onSelect={handleSwitch}
      />
      <DetailTabBtn
        title={"Media"}
        isSelected={isMedia}
        onSelect={handleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default DetailTabs;
