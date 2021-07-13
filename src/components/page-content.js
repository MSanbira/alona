import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Paths } from "../constants";
import AboutPage from "./about-page";
import HomePage from "./home-page";

export default function PageContent(props) {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={HomePage} exact/>
        <Route path={`/${Paths.ABOUT}`} component={AboutPage} exact/>
        <Redirect from='*' to={'/'} />
      </Switch>
    </Router>
  );
}
