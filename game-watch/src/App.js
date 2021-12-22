import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
