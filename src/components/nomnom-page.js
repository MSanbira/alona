import React from "react";
import headerSrc from "../assets/images/nomnom/nomnom-exp-header.png";
import multiFilteringSrc from "../assets/images/nomnom/Photo-multi-screen-filtering.png";
import deviceMock1Src from "../assets/images/nomnom/Device-Mock-1.png";
import deviceMock2Src from "../assets/images/nomnom/Device-Mock-2.png";
import deviceMock3Src from "../assets/images/nomnom/Device-Mock-3.png";
import hostSrc from "../assets/images/nomnom/Host-image.png";
import tourInfoSrc from "../assets/images/nomnom/Tour-info-img-1.png";
import frame54Src from "../assets/images/nomnom/Frame-54.png";
import tourReviewsSrc from "../assets/images/nomnom/tour_reviews-x.png";
import aboutLeeSrc from "../assets/images/nomnom/about_lee-x.png";
import moreLeeSrc from "../assets/images/nomnom/more_from_lee-x.png";
import dribbleSrc from "../assets/images/nomnom/dribbble-yiwen_lu-ramen-set-2016-square300.png";
import kittokatsuSrc from "../assets/images/nomnom/kittokatsu_little_tokyo__v5_List_Image.png";
import ramenSrc from "../assets/images/nomnom/ramen.png";
import croppedDeviceSrc from "../assets/images/nomnom/Cropped-device.png";
import illustration1Src from "../assets/images/nomnom/noodles-img.png";
import illustration2Src from "../assets/images/nomnom/seafood-img.png";
import illustration3Src from "../assets/images/nomnom/sushi-img.png";
import illustration4Src from "../assets/images/nomnom/vegan-img.png";
import illustration5Src from "../assets/images/nomnom/dimsum-img.png";
import illustration6Src from "../assets/images/nomnom/sate-img.png";
import illustration7Src from "../assets/images/nomnom/fried-img.png";
import illustration8Src from "../assets/images/nomnom/bbq-img.png";

import { Paths } from "../constants";
import ColorPalette from "./small-components/color-palette";
import MobileCarousel from "./small-components/mobile-carousel";
import AnotherApps from "./small-components/another-apps";

export default function NomnomPage(props) {
  const mainImgStyle = {'--main-img-color': '#FFE6E5'}

  return (
    <section id="nomnomPage">
      <div className="main-img" style={mainImgStyle}>
        <img src={headerSrc} alt="nomnom app"/>
      </div>
      <div className="container">
        <div className="summery-text-container">
          <div className="titles">
            <h1>nomnom</h1>
            <h4>mobile app</h4>
          </div>
          <div className="text-block">
            <h3>TL;DR</h3>
            <p>
              Nomnom is an app for Millenials who love to eat, travel and are
              specifically drawn to asian food and culture. The app caters to
              asian foodies and gives them a local, delicious and asian-oriented
              experience, from restaurants and street vendors to full-on food
              tours.
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
              We all have a ‘thing’ we live and breathe for. It could be art,
              design or automotives. For those who live and breathe asian food,
              I designed a delightful, intuitive experience browsing and booking
              food tours and restaurant reservations.
            </p>
          </div>
          <div className="text-block">
            <h3>THE GOAL</h3>
            <p>
              Help travellers with a taste for asian food get easy access to
              relevant tours and restaurants.
            </p>
          </div>
        </div>
      </div>

      <div className="content-divider"/>

      <div className="container">
        <div className="centered-title-and-p">
          <h3>EASY FILTERING</h3>
          <p className="text-container-1">
            To help users’ orientation and planning ability, I designed three
            types of filters, all easy to use and understand, and are beautiful
            to look at.
          </p>
        </div>
      </div>

      <img
        className="margin-center hide-on-mobile contained-img"
        src={multiFilteringSrc}
        alt="nomnom mockup"
      />

      <MobileCarousel
        items={[
          <img src={deviceMock1Src} alt="nomnom mockup" />,
          <img src={deviceMock2Src} alt="nomnom mockup" />,
          <img src={deviceMock3Src} alt="nomnom mockup" />,
        ]}
      />

      <div className="content-divider"/>

      <div className="container">
        <div className="centered-title-and-p">
          <h3>KNOW THY HOST</h3>
          <p className="text-container-2">
            I focused on users’ need to immerse themselves in local culture and
            cuisine. The two most prominent values are locality and
            authenticity.
          </p>
        </div>
        <div className="host-container">
          <img src={hostSrc} alt="host" />
          <div className="title-container">
            <h1>LEE HUANG</h1>
            <h2>
              Food photographer, chef
              <br />
              and a New-Yorker at heart
            </h2>
          </div>
        </div>
      </div>

      <div className="content-divider"/>

      <div className="container">
        <div className="centered-title-and-p">
          <h3>TOUR INFORMATION</h3>
          <p className="text-container-3">
            Users can do a deep-dive into each tour, and receive full
            information about the when’s and where’s, as well as information
            about their local host and other tours available through that
            specific host, if they liked them and wanted to get another taste.
          </p>
        </div>
      </div>

      <div className="tour-mocks">
        <img className="hide-on-mobile" src={tourInfoSrc} alt="nomnom mockup" />
        <img className="show-on-mobile" src={frame54Src} alt="nomnom mockup" />
        <img src={tourReviewsSrc} alt="nomnom mockup" />
        <img src={aboutLeeSrc} alt="nomnom mockup" />
        <img src={moreLeeSrc} alt="nomnom mockup" />
      </div>

      <div className="content-divider"/>

      <div className="container">
        <div className="left-title-and-p">
          <h3>RESEARCH & INSPIRATION</h3>
          <p className="text-container-3">
            As a lover of asian food, I researched the issue to understand how I
            could give the interface an interesting, modern visual take on
            eastern cultures while avoiding the pitfalls of cliches. I ended up
            finding inspiration in westernized versions of the asian quizine
            culture: takeout menus.
          </p>
        </div>

        <div className="three-img-container">
          <img src={dribbleSrc} alt="inspection" />
          <div>
            <img
              className="contained-img"
              src={kittokatsuSrc}
              alt="inspection"
            />
            <img className="contained-img" src={ramenSrc} alt="inspection" />
          </div>
        </div>
      </div>

      <div className="content-divider"/>

      <div className="container font-selection-container">
        <div className="font-selection-section">
          <div className="font-selection">
            <h3>TYPOGRAPHY</h3>
            <h4>Headings</h4>
            <h1>Staatliches</h1>
            <h4>Paragraphs</h4>
            <h2>Roboto Regular</h2>
          </div>
          <div className="mock-contnier hide-on-tablet">
            <img src={croppedDeviceSrc} alt="nomnom mockup" />
            <div className="text-box">
              <h1>
                dim sumin’
                <br />
                in new york
              </h1>
              <p>
                The first two hours will be spent sampling steamed, boiled &
                fried dumplings from a variety of pop-up shops, sit-down
                restaurants, and streetside stalls. We'll test your chopsticks
                skills with Shanghai's famous soup dumplings (xiaolongbao) and
                get your mouth watering with fried potstickers straight from the
                wok. We'll eat several other regional varieties of dumplings and
                a few surprises from other provincial Chinese cuisines as we
                explore the leafy streets of the former French Concession.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-divider" />

      <ColorPalette
        colors={[
          { name: "Takeaway Cobalt", color: "#0000ef" },
          { name: "Tom Yum Pink", color: "#ffc7c7" },
          { name: "Waterlilly Nude", color: "#f3e8e8" },
          { name: "Zen White", color: "#fbf8f8" },
        ]}
      />

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p">
          <h3>ILLUSTRATIONS</h3>
          <p className="text-container-3">
            Asian takeout menus often feature smooth-lined illustations. Imagine
            my delight, as it is my exact style of illustrating! Category icons
            were quickly jotted down to fit the overall aesthetics of the app.
          </p>
        </div>
        <div className="illustrations-section">
          <img src={illustration1Src} alt="illustration" />
          <img src={illustration2Src} alt="illustration" />
          <img src={illustration3Src} alt="illustration" />
          <img src={illustration4Src} alt="illustration" />
          <img src={illustration5Src} alt="illustration" />
          <img src={illustration6Src} alt="illustration" />
          <img src={illustration7Src} alt="illustration" />
          <img src={illustration8Src} alt="illustration" />
        </div>
      </div>

      <div className="content-divider full-width"/>

      <AnotherApps exclude={Paths.NOMNOM}/>
    </section>
  );
}
