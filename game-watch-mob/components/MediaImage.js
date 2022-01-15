import React, { useState } from "react";
import { View, Image, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TouchableCmp from "./UI/TouchableCmp";
import { colors } from "../utils/constants";

const MediaImage = ({ imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableCmp
        onPress={(prevState) => {
          setShowModal(true);
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
      </TouchableCmp>

      <Modal visible={showModal} transparent>
        <View style={styles.modal}>
          <TouchableCmp
            onPress={(prevState) => {
              setShowModal(false);
            }}
          >
            <View style={styles.close}>
              <Ionicons name="close-circle" size={36} color={colors.primary} />
            </View>
          </TouchableCmp>
          <Image
            source={{ uri: imageUrl }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: 100,
    margin: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  modal: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  close: {
    alignItems: "flex-end",
    margin: 5,
  },
});

export default MediaImage;
