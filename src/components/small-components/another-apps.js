import React from "react";
import { Paths } from "../../constants";
import { getSubPath } from "../../utils";
import arrowSrc from "../../assets/images/Vector.svg";

export default function AnotherApps(props) {
  const { exclude } = props;
  const apps = [Paths.TRANSPARENCY, Paths.DS, Paths.NOMNOM, Paths.HATCH].filter(
    (app) => app !== exclude
  );

  return (
    <div className="container">
      <div className="another-app-btn-section">
        <p className="centered-text">
          Like what you see?
          <br />
          stick around and look at some other stuff I created.
        </p>
        <img className="arrow-img" src={arrowSrc} alt="here" />
        <div className="btn-container">
          {apps.map((app) => getAppLink(app))}
        </div>
      </div>
    </div>
  );
}

const getAppLink = (app) => {
  switch (app) {
    case Paths.TRANSPARENCY:
      return (
        <AppLink
          key={Paths.TRANSPARENCY}
          path={Paths.TRANSPARENCY}
          title="transparency"
          subText="// pendo mobile"
        />
      );
    case Paths.DS:
      return (
        <AppLink
          key={Paths.DS}
          path={Paths.DS}
          title="design system"
          subText="// pendo"
        />
      );
    case Paths.HATCH:
      return (
        <AppLink
          key={Paths.HATCH}
          path={Paths.HATCH}
          title="hatch baby"
          subText="// ecommerce ui"
        />
      );
    case Paths.NOMNOM:
      return (
        <AppLink
          key={Paths.NOMNOM}
          path={Paths.NOMNOM}
          title="nomnom"
          subText="// a place for foodies"
        />
      );
    default:
      break;
  }
};

const AppLink = ({ path, title, subText }) => (
  <a href={getSubPath(path)} className="btn" data-sub-text={subText}>
    {title}
  </a>
);
