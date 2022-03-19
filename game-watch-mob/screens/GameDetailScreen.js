import React, { useState, useEffect, useCallback } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as singleGameActions from "../store/actions/singleGame";
import * as favActions from "../store/actions/fav";
import {
  Loading,
  Error,
  DetailHeader,
  MainDetail,
  MediaDetail,
} from "../components";

const GameDetailScreen = (props) => {
  const [isMedia, setIsMedia] = useState(false);
  const gameId = props.route.params.gameId;

  const {
    game_loading: loading,
    game_error: error,
    game,
  } = useSelector((state) => state.singleGame);

  const { fav_loading, fav_error, fav_success } = useSelector(
    (state) => state.singleGame
  );

  const { token } = useSelector((state) => state.auth);

  const isAuth = !!token.access;

  const dispatch = useDispatch();

  const loadGame = useCallback(async () => {
    await dispatch(singleGameActions.fetchGame(gameId));
  }, [dispatch]);

  const handleFavorite = async () => {
    console.log("clicked");
    if (isAuth) {
      await dispatch(favActions.setFavorite(gameId, token.access));
    } else {
      props.navigation.navigate("Authentication", { screen: "Auth Screen" });
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGame);
    return () => {
      unsubscribe();
    };
  }, [loadGame]);

  if (loading) {
    return <Loading />;
  }

  if (error.is_occured) {
    return <Error msg={error.msg} onPressHandler={loadGame} />;
  }
  if (game) {
    return (
      <ScrollView>
        <DetailHeader
          navigation={props.navigation}
          game={game}
          handleFavorite={handleFavorite}
          isMedia={isMedia}
          setIsMedia={setIsMedia}
          error={fav_error}
          success={fav_success}
        />
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

export default GameDetailScreen;
