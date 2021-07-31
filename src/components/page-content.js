import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Paths } from "../constants";
import AboutPage from "./about-page";
import HomePage from "./home-page";
import { getSubPath, getRootPath } from "../utils";
import NomnomPage from "./nomnom-page";
import HatchBabyPage from "./hatch-baby-page";
import TransparencyPage from "./transparency-page";
import DSPage from "./ds-page";

export default function PageContent(props) {
  return (
    <div onClick={() => props.setIsMenuOpen(false)}>
      <Router>
        <Switch>
          <Route path={getRootPath()} component={HomePage} exact />
          <Route path={getSubPath(Paths.ABOUT)} component={AboutPage} exact />
          <Route path={getSubPath(Paths.TRANSPARENCY)} component={TransparencyPage} exact />
          <Route path={getSubPath(Paths.DS)} component={DSPage} exact />
          <Route path={getSubPath(Paths.NOMNOM)} component={NomnomPage} exact />
          <Route
            path={getSubPath(Paths.HATCH)}
            component={HatchBabyPage}
            exact
          />
          <Redirect from="*" to={getRootPath()} />
        </Switch>
      </Router>
    </div>
  );
}
