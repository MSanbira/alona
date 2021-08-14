import React from "react";
import { Paths } from "../constants";
import catHeroSrc from "../assets/images/Cat-hero.svg";
import catShoeSrc from "../assets/images/Cat-shoe.svg";
import catMobileSrc from "../assets/images/Cat-Mobile.png";
import conffetiSrc from "../assets/images/Conffetti.svg";
import smallConfetti1Src from "../assets/images/small_confetti1.svg";
import smallConfetti2Src from "../assets/images/small_confetti2.svg";
import arrowHomepageSrc from "../assets/images/arrow-homepage.svg";
import { getSubPath } from "../utils";

export default function HomePage(props) {
  return (
    <section id="homePage">
      <div className="container">
        <div className="title-cat-container">
          <h1 className="main-title color-primary">HELLO</h1>
          <div className="cat-section hide-on-mobile">
            <img src={catHeroSrc} className="cat-img" alt="cat" />
            <h1 className="o-letter color-primary">O</h1>
            <img src={catShoeSrc} className="cat-shoe-img" alt="cat shoe" />
          </div>
          <img className="title-cat-mobile" src={catMobileSrc} alt="cat" />
        </div>

        <p className="color-primary main-desc">
          I'm a product designer with 5 years’ experience in leading product UX
          for a variety of digital products, currently employed @ Pendo for
          Mobile.
          <br />
          I’m also a huge cat lady.
          <br />
          <a href={getSubPath(Paths.ABOUT)} className="text-btn">
            Read more about me.
          </a>
          <img
            src={conffetiSrc}
            className="conffetti-img hide-on-mobile"
            alt="conffetti"
          />
        </p>

        <div className="select-work-container">
          <img src={arrowHomepageSrc} className="arrow-img" alt="scroll down" />
          <img
            src={smallConfetti1Src}
            className="confetti-sm1-img"
            alt="confetti"
          />
          <img
            src={smallConfetti2Src}
            className="confetti-sm2-img"
            alt="confetti"
          />
          <h2 className="color-primary">select work</h2>
          <div className="btn-container">
            <a
              href={getSubPath(Paths.TRANSPARENCY)}
              className="btn btn-big"
              data-sub-text="pendo mobile"
            >
              transparency by design
            </a>
            <a
              href={getSubPath(Paths.DS)}
              className="btn btn-big"
              data-sub-text="pendo"
            >
              design system for alignment
            </a>
            <a
              href="https://www.figma.com/proto/8SsipaR4c99c6tr36rAvG1/Portfolio-aug-21?page-id=42%3A18766&node-id=44%3A18767&viewport=382%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=44%3A18767"
              className="btn btn-big"
              data-sub-text="bits of gold"
              target="_blank"
              rel="noreferrer"
            >
              crypto-currency exchange
            </a>
            <a
              href={getSubPath(Paths.NOMNOM)}
              className="btn btn-big"
              data-sub-text="a place for foodies"
            >
              nomnom
            </a>
            <a
              href={getSubPath(Paths.HATCH)}
              className="btn btn-big"
              data-sub-text="ecommerce ui"
            >
              hatch baby
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
