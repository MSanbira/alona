import React from "react";
import { Paths } from "../../constants";
import { getSubPath } from "../../utils";
import arrowSrc from "../../assets/images/Vector.svg";

export default function AnotherApps(props) {
  const { exclude } = props;
  const apps = [Paths.NOMNOM, Paths.HATCH].filter((app) => app !== exclude);

  return (
    <div className="container">
      <div className="another-app-btn-section">
        <p className="centered-text">
          Like what you see?
          <br />
          stick around and look at some other stuff I created.
        </p>
        <img className="arrow-img" src={arrowSrc} alt="here" />
        {apps.map((app) => getAppLink(app))}
      </div>
    </div>
  );
}

const getAppLink = (app) => {
  switch (app) {
    case Paths.HATCH:
      return (
        <div className="btn-container">
          <a
            href={getSubPath(Paths.HATCH)}
            className="btn"
            data-sub-text="ecommerce ui"
          >
            hatch baby
          </a>
        </div>
      );
    case Paths.NOMNOM:
      return (
        <div className="btn-container">
          <a
            href={getSubPath(Paths.NOMNOM)}
            className="btn"
            data-sub-text="a place for foodies"
          >
            nomnom
          </a>
        </div>
      );
    default:
      break;
  }
};
