import "react-native-gesture-handler";
import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { authReducer } from "./store/reducers/auth";
import { genresReducer } from "./store/reducers/genres";
import { gamesReducer } from "./store/reducers/games";
import { singleGameReducer } from "./store/reducers/singleGame";
import { favReducer } from "./store/reducers/fav";
import AppNavigator from "./navigation/AppNavigator";

const rootReducer = combineReducers({
  auth: authReducer,
  genres: genresReducer,
  games: gamesReducer,
  singleGame: singleGameReducer,
  fav: favReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
