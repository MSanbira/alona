import React from "react";
import lampHeaderSrc from "../assets/images/hatch_baby/Hbaby-exp-header.png";

import { Paths } from "../constants";
// import ColorPalette from "./small-components/color-palette";
// import MobileCarousel from "./small-components/mobile-carousel";
import AnotherApps from "./small-components/another-apps";

export default function TransparencyPage(props) {
  const mainImgStyle = {'--main-img-color': '#004f79'}

  return (
    <section id="hatchBabyPage">
      <div className="main-img" style={mainImgStyle}>
        <img src={lampHeaderSrc} alt="hatch baby app" style={{padding: '16px 0 32px 0'}}/>
      </div>
      <div className="container">
        <div className="summery-text-container">
          <div className="titles">
            <h1>hatch baby</h1>
            <h4>eCommerce site</h4>
          </div>
          <div className="text-block">
            <h3>TL;DR</h3>
            <p>
              Hatch Baby is a real, live company that creates and markets smart
              nursery peripherals. Their site currently offers 3 products. In my
              redesign I focused on one product to represent the product page -
              the Grow smart night light.
            </p>
          </div>
          <div className="text-block">
            <h3>PROJECT SPECS</h3>
            <p>
              A student project, created as a part of my studies at
              <a
                href="createfuture.co.il"
                className="highlight"
                target="_blank"
                rel="noreferrer"
              >
                CREATE.
              </a>
              <br />
              Role // UI design, Illustration
              <br />
              Year // created July, 2019
            </p>
          </div>
          <div className="text-block">
            <h3>BACKGROUND</h3>
            <p>
              There’s a huge array of smart gadgets created to make our lives
              easier, and new parents are a great target demographic: they’re
              tired, relatively young, super anxious and nervous and usually
              have dispensible income.
            </p>
          </div>
          <div className="text-block">
            <h3>THE GOAL</h3>
            <p>
              Deliver a meaningful, straight-forward experience entailing as
              much information as possible while retaining a feel of simplicity
              and elegance.
            </p>
          </div>
        </div>
      </div>

      <div className="content-divider" />

      

      <AnotherApps exclude={Paths.HATCH}/>

    </section>
  );
}
