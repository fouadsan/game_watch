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
  const [showToast, setShowToast] = useState({
    is_visible: false,
    msg: "",
  });
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

      if (fav_success) {
        setIsFav((currState) => !currState);
        if (isFav) {
          setShowToast({
            is_visible: true,
            msg: "game added to favorites",
          });
        } else {
          setShowToast({
            is_visible: true,
            msg: "game removed from favorites",
          });
        }
      }
    } else {
      props.navigation.navigate("Auth Screen");
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadGame);
    return () => {
      unsubscribe();
    };
  }, [loadGame]);

  useEffect(() => {
    const handleToast = setTimeout(() => {
      setShowToast({ is_visible: false, msg: "" });
    }, 2000);
    return () => clearTimeout(handleToast);
  }, [showToast]);

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
          name={game.name}
          poster={game.poster}
          genre={game.genre}
          platforms={game.platforms}
          releaseDate={game.releaseDate}
          screenshot={game.screenshots && game.screenshots[0].image}
          rating={game.rating}
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
        <ToastCmp showToast={showToast} />
        {/* <Toast visible={showToast}>Thanks for subscribing!</Toast> */}
      </ScrollView>
    );
  }
};

export default GameDetailScreen;
