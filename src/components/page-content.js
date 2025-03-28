import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
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
          <Route exact path={getRootPath()} component={HomePage} />
          <Route path={getSubPath(Paths.ABOUT)} component={AboutPage} />
          <Route path={getSubPath(Paths.TRANSPARENCY)} component={TransparencyPage} />
          <Route path={getSubPath(Paths.DS)} component={DSPage} />
          <Route path={getSubPath(Paths.NOMNOM)} component={NomnomPage} />
          <Route path={getSubPath(Paths.HATCH)} component={HatchBabyPage} />
          <Route path="*">
            <Redirect to={getRootPath()} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
