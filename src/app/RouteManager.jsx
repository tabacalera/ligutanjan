import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/Home/LandingPage";

function RouterManager() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default RouterManager;
