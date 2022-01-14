import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Platform,
  TouchableNativeFeedback,
  Dimensions,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";

import * as singleGameActions from "../store/actions/singleGame";
import {
  Loading,
  Error,
  TouchableCmp,
  MainDetail,
  MediaDetail,
  DetailTabs,
} from "../components";
import { colors } from "../utils/constants";

const GameDetailScreen = (props) => {
  const [isMedia, setIsMedia] = useState(false);
  const gameId = props.route.params.gameId;

  const {
    game_loading: loading,
    game_error: error,
    game,
  } = useSelector((state) => state.singleGame);

  const isAuth = useSelector((state) => !!state.auth.token.access);

  const dispatch = useDispatch();

  const loadGame = useCallback(async () => {
    await dispatch(singleGameActions.fetchGame(gameId));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGame);
    return () => {
      unsubscribe();
    };
  }, [loadGame]);

  const handleFavorite = () => {
    console.log("clicked");
    if (isAuth) {
      // dispatch favAction
    } else {
      props.navigation.navigate("Authentication", { screen: "Auth Screen" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error.is_occured) {
    return <Error msg={error.msg} onPressHandler={loadGame} />;
  }
  if (game) {
    return (
      <ScrollView>
        <ImageBackground
          source={{ uri: game.screenshots && game.screenshots[0].image }}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.headerRow}>
            <View style={styles.touchable}>
              <TouchableCmp
                onPress={() => props.navigation.goBack()}
                background={
                  Platform.OS === "android" && Platform.Version >= 21
                    ? TouchableNativeFeedback.Ripple(colors.primary, true)
                    : null
                }
              >
                <View style={styles.element}>
                  <Ionicons name="ios-arrow-back" size={25} color="white" />
                </View>
              </TouchableCmp>
            </View>

            <View style={styles.touchable}>
              <TouchableCmp
                onPress={handleFavorite}
                background={
                  Platform.OS === "android" && Platform.Version >= 21
                    ? TouchableNativeFeedback.Ripple(colors.primary, true)
                    : null
                }
              >
                <View style={styles.element}>
                  <Ionicons name="ios-heart-outline" size={25} color="white" />
                </View>
              </TouchableCmp>
            </View>
          </View>
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                The Witcher 3: Wild Hunt Wild Hunt Wild Hunt
              </Text>
            </View>

            <View style={styles.element}>
              <Text
                style={{
                  fontFamily: "open-sans",
                  fontSize: 12,
                  color: colors.text,
                }}
              >
                Rating
              </Text>
              <CircularProgress
                value={game.rating * 10}
                radius={22}
                duration={2000}
                textColor={colors.text}
                valueSuffix={"%"}
                maxValue={100}
                activeStrokeWidth={4}
                inActiveStrokeWidth={5}
                activeStrokeColor={"green"}
                inActiveStrokeColor={"green"}
                inActiveStrokeOpacity={0.2}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.posterContainer}>
              <Image
                source={{ uri: game.poster }}
                resizeMode="stretch"
                style={styles.image}
              />
            </View>
            <View style={styles.infoColumn}>
              <View style={styles.row}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.infoText}
                >
                  Genres: Shooter, Adventure
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.infoText}
                >
                  Platform: PC, PS3, X360, PS4
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.infoText}>Realse Date: 17Sep, 2013</Text>
              </View>
            </View>
          </View>
          <DetailTabs isMedia={isMedia} setIsMedia={setIsMedia} />
        </View>
        {isMedia ? (
          <MediaDetail
            screenshots={game.screenshots}
            artworks={game.artworks}
          />
        ) : (
          <MainDetail
            description={game.description}
            developer={game.developer}
            publisher={game.publisher}
            gameModes={game.gameModes}
            gameEngines={game.gameEngines}
            playerPerspective={game.playerPerspective}
            themes={game.themes}
            storyline={game.storyline}
          />
        )}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  background: {
    justifyContent: "space-between",
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  touchable: {
    borderRadius: 50,
    overflow: "hidden",
  },

  element: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    maxWidth: Dimensions.get("window").width * 0.8,
  },

  title: {
    fontSize: 18,
    fontFamily: "open-sans",
    fontWeight: "700",
    textTransform: "capitalize",
    color: colors.text,
  },

  infoContainer: {
    justifyContent: "space-between",
    height: Dimensions.get("window").height * 0.2,
  },

  info: {
    flexDirection: "row",
    height: "80%",
    marginHorizontal: 10,
    paddingVertical: 5,
  },

  posterContainer: {
    height: "100%",
    width: "20%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  infoColumn: {
    justifyContent: "space-evenly",
    width: "80%",
  },

  row: {
    flexDirection: "row",
    marginHorizontal: 10,
  },

  infoText: {
    fontFamily: "open-sans",
    color: colors.text,
  },
});

export default GameDetailScreen;
