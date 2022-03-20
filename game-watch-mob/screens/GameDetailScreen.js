import React, { useState, useEffect, useCallback } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-root-toast";

import * as singleGameActions from "../store/actions/singleGame";
import * as favActions from "../store/actions/fav";
import {
  Loading,
  Error,
  DetailHeader,
  MainDetail,
  MediaDetail,
  ToastCmp,
} from "../components";

const GameDetailScreen = (props) => {
  const [isMedia, setIsMedia] = useState(false);
  const gameId = props.route.params.gameId;

  const {
    game_loading: loading,
    game_error: error,
    game,
  } = useSelector((state) => state.singleGame);

  const userId = useSelector((state) => state.auth.user_id);

  const [isFav, setIsFav] = useState(userId && game.users.includes(userId));

  const { fav_error, fav_success } = useSelector((state) => state.fav);

  const { token } = useSelector((state) => state.auth);

  const isAuth = !!token.access;

  const dispatch = useDispatch();

  const loadGame = useCallback(async () => {
    await dispatch(singleGameActions.fetchGame(gameId));
  }, [dispatch]);

  const handleFavorite = async () => {
    if (isAuth) {
      await dispatch(favActions.setFavorite(gameId, token.access));

      let toast = Toast.show("success", {
        duration: Toast.durations.LONG,
      });
      if (fav_success) {
        setIsFav((currState) => !currState);
        setTimeout(function hideToast() {
          Toast.hide(toast);
        }, 2000);
      }
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
          isFav={isFav}
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
