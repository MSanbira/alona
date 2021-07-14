import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Paths } from "../constants";
import AboutPage from "./about-page";
import HomePage from "./home-page";
import { getSubPath, getRootPath } from "../utils";

export default function PageContent(props) {
  return (
    <Router>
      <Switch>
        <Route path={getRootPath()} component={HomePage} exact/>
        <Route path={getSubPath(Paths.ABOUT)} component={AboutPage} exact/>
        <Redirect from='*' to={getRootPath()} />
      </Switch>
    </Router>
  );
}
