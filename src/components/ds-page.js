import React from "react";
import headerSrc from "../assets/images/ds/ds-header.svg";
import c2cSrc from "../assets/images/ds/DS-c2c-exp.png";
import { Paths } from "../constants";
import AnotherApps from "./small-components/another-apps";

export default function DSPage(props) {
  const mainImgStyle = { "--main-img-color": "#CFF7FE" };

  return (
    <section id="hatchBabyPage">
      <div className="main-img" style={mainImgStyle}>
        <img src={headerSrc} alt="hatch baby app" style={{ padding: "32px" }} />
      </div>
      <div className="container">
        <div className="summery-text-container">
          <div className="titles">
            <h3>PENDO CORE</h3>
            <h1>Design System for Alignment</h1>
            <h4>Recreating Pendo Heartbeat to support scale and alignment</h4>
          </div>
          <div className="text-block">
            <h3>BACKGROUND</h3>
            <p className="text-with-margin">
              Pendo Heartbeat was first created as a component library 3 years
              ago when the company first moved to Figma. At the time there were
              ~5 designers on the team across 2 global hubs. 3 years later, the
              team had grown to 16 designers across 5 different time zones, with
              a forecast of doubling by the end of 2021.
            </p>
            <p>
              The engineering team had also grown significantly in that time,
              along with a growing portfolio of products from different
              acquisitions over the years. Near the end of 2020, I felt like
              things needed to change. The library wasn’t enough, and with the
              massive scaling we were experiencing as a company, we needed
              something more robust to support our growing teams.
            </p>
          </div>
          <div className="text-block">
            <h3>PROJECT SPECS</h3>
            <p>
              Rethinking our design system across all product and engineering
              teams at{" "}
              <a
                href="pendo.com"
                className="highlight"
                target="_blank"
                rel="noreferrer"
              >
                Pendo.io.
              </a>
              <br />
              Role // E2E product design
              <br />
              Year // 2020-2021
            </p>
          </div>
        </div>
      </div>

      <div className="c2c-img">
        <img src={c2cSrc} alt="design system" />
      </div>

      <div className="content-divider" />

      <AnotherApps exclude={Paths.DS} />
    </section>
  );
}
