import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import TouchableCmp from "./UI/TouchableCmp";
import { colors } from "../utils/constants";

const MainDetail = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.description}>
        <Text style={styles.descTitle}>Description</Text>
        <Text
          style={styles.descParagraph}
          numberOfLines={isExpanded ? 8 : 3}
          ellipsizeMode="tail"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
          magnam qui quis debitis cupiditate non dolor officia earum modi, saepe
          mollitia distinctio vel eaque hic voluptatem quo ducimus pariatur,
          deserunt nostrum. Deleniti a ipsa possimus, vero, sunt harum iure
          fugiat consequuntur quos minima incidunt cum nobis enim, eaque ad
          itaque.
        </Text>
        <View style={styles.btnContainer}>
          <TouchableCmp onPress={() => setIsExpanded(!isExpanded)}>
            <View style={styles.readMoreContainer}>
              <Text style={styles.readMore}>
                {isExpanded ? "less" : "more"}
              </Text>
            </View>
          </TouchableCmp>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get("window").height * 0.35,
    borderWidth: 1,
    borderColor: "red",
  },

  description: {
    margin: 10,
  },

  descTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "open-sans",
    fontWeight: "700",
    color: colors.primary,
  },

  descParagraph: {
    fontFamily: "open-sans",
    color: colors.text,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
  },

  readMoreContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colors.drawer,
  },

  readMore: {
    fontFamily: "open-sans",
    color: colors.text,
  },
});

export default MainDetail;
