import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Switch>
    </Router>
  );
}

export default App;
