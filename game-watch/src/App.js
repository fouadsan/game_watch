import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";
import { HomePage, ErrorPage } from "./pages";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
