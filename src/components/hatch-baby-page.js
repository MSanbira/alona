import React from "react";
import lampHeaderSrc from "../assets/images/hatch_baby/Hbaby-exp-header.png";
import homepageSrc from "../assets/images/hatch_baby/homepage.png";
import musicalNotesSrc from "../assets/images/hatch_baby/MusicalNotes.png";
import productPageSrc from "../assets/images/hatch_baby/product-page.png";
import DMLeftSrc from "../assets/images/hatch_baby/Device-Mock-Left.png";
import DMRightSrc from "../assets/images/hatch_baby/Device-Mock-Right.png";
import DMLeftMSrc from "../assets/images/hatch_baby/Device-Mock-left-m.png";
import DMRightMSrc from "../assets/images/hatch_baby/Device-Mock-right-m.png";
import Frame113Src from "../assets/images/hatch_baby/Frame113.svg";
import Frame108Src from "../assets/images/hatch_baby/Frame108.svg";
import Frame109Src from "../assets/images/hatch_baby/Frame109.svg";
import shippingSrc from "../assets/images/hatch_baby/shipping.svg";
import recycleSrc from "../assets/images/hatch_baby/recycle.svg";
import calendarSrc from "../assets/images/hatch_baby/calendar.svg";
import truckSrc from "../assets/images/hatch_baby/truck.svg";
import soundsSrc from "../assets/images/hatch_baby/sounds.svg";
import babySrc from "../assets/images/hatch_baby/baby.png";
import daynoSrc from "../assets/images/hatch_baby/dayno.png";
import birds3Src from "../assets/images/hatch_baby/birds3.png";
import birds2Src from "../assets/images/hatch_baby/birds2.png";
import birds1Src from "../assets/images/hatch_baby/birds1.png";
import backgroundPill from "../assets/images/hatch_baby/hbaby-paleBlue-BG.svg";

import { Paths } from "../constants";
import ColorPalette from "./small-components/color-palette";
import MobileCarousel from "./small-components/mobile-carousel";
import AnotherApps from "./small-components/another-apps";

export default function HatchBabyPage(props) {
  const mainImgStyle = { "--main-img-color": "#004f79" };

  return (
    <section id="hatchBabyPage">
      <div className="main-img" style={mainImgStyle}>
        <img
          src={lampHeaderSrc}
          alt="hatch baby app"
          style={{ padding: "16px 0 32px 0" }}
        />
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

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>understanding users’ needs</h3>
          <p className="text-container-2">
            When designing for an eCommerce site, my main concern is conveying
            the product’s value in a meaningful way, and letting those values
            shine.
          </p>
        </div>
        <img
          className="margin-center contained-img"
          src={homepageSrc}
          alt="hatch baby mockup"
        />
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="text-mock-row">
          <div className="left-title-and-p">
            <h3>SPEAKING TO PARENTS’ PAINS</h3>
            <p>
              As part of the site redesign, I chose copy and micro-copy that
              will help parents understand Hatch Baby’s mission, and their
              products’ value.
            </p>
          </div>
          <div className="mock-box-notes-container">
            <h2>
              Your bedtime routine <br />
              just became a breeze
            </h2>
            <h4>
              Night light, sound machine, and Time-to-Rise indicator in one
              modern device, designed to control and program conveniently from
              your phone.
            </h4>
            <div className="mock-btn">Buy now | $59</div>
            <img src={musicalNotesSrc} alt="music notes" />
          </div>
        </div>
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="left-title-and-p margin-down">
          <h3>PRODUCT PAGE</h3>
          <p className="text-container-3">
            These days, product pages are filled with an enormous amount of
            detailed information, and on this page it was a main challenge. My
            design sought to give all the necessary information without feeling
            overcrowded and dense.
          </p>
        </div>
        <img
          className="margin-center contained-img"
          src={productPageSrc}
          alt="hatch baby mockup"
        />
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>SCALING DOWN</h3>
          <p className="text-container-2">
            The mobile version required refitting the page as well as creating
            mobile-relevant components like swipe galleries and horizontal
            scrolling.
          </p>
        </div>
        <div className="two-long-mocks hide-on-mobile">
          <img src={DMLeftSrc} alt="hatch baby mockup" />
          <img src={DMRightSrc} alt="hatch baby mockup" />
        </div>
      </div>

      <MobileCarousel
        items={[
          <img src={DMLeftMSrc} alt="hatch baby mockup" />,
          <img src={DMRightMSrc} alt="hatch baby mockup" />,
        ]}
      />

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>VALUABLE FEATURES</h3>
          <p className="text-container-2">
            As part of my intent to coherently communicate product value to
            parents, I chose my top three features I knew from talking to
            parents are critical to understanding the product’s worth.
          </p>
        </div>
        <div className="does-it-all-container" style={{backgroundImage: "url(" + backgroundPill + ")" }}>
          <h2 className="hide-on-mobile">The sleep device that does it all</h2>
          <div className="features-section">
            <div className="feature-item hide-on-mobile">
              <img src={Frame113Src} alt="sun" />
              <h3>Style to match</h3>
              <p>
                Select from our collection of fun coverlets to coordinate with
                your child's nursery or bedroom.
              </p>
            </div>
            <div className="feature-item hide-on-mobile">
              <img src={Frame108Src} alt="shapes" />
              <h3>Simple and intuitive</h3>
              <p>
                A modern device, controlled and programmed conveniently from
                your phone.
              </p>
            </div>
            <div className="feature-item">
              <img src={Frame109Src} alt="product" />
              <h3>Time-to-rise</h3>
              <p>
                Set a timer to color the lamp, so your toddler knows it’s time
                to get out of bed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-divider" />

      <ColorPalette
        colors={[
          { name: "Happy Teal", color: "#87d5cc" },
          { name: "Baby-bottom", color: "#e0b598" },
          { name: "Nursery Rhyme", color: "#567793" },
          { name: "Midnight Blue", color: "#00223f" },
        ]}
      />

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>ICONOGRAPHY</h3>
        </div>
        <div className="iconography-container">
          <div className="iconography-item">
            <div>
              <img src={shippingSrc} alt="shipping" />
            </div>
            <h3>
              Free
              <br />
              Shipping
            </h3>
          </div>
          <div className="iconography-item">
            <div>
              <img src={recycleSrc} alt="recycle" />
            </div>
            <h3>
              Recycled
              <br />
              materials
            </h3>
          </div>
          <div className="iconography-item">
            <div>
              <img src={calendarSrc} alt="calendar" />
            </div>
            <h3>
              5-year
              <br />
              warranty
            </h3>
          </div>
          <div className="iconography-item">
            <div>
              <img src={truckSrc} alt="truck" />
            </div>
            <h3>
              Same-day
              <br />
              delivery
            </h3>
          </div>
          <div className="iconography-item">
            <div>
              <img src={soundsSrc} alt="sounds" />
            </div>
            <h3>
              Original
              <br />
              music
            </h3>
          </div>
        </div>
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>RESEARCH & INSPIRATION</h3>
          <p className="text-container-3">
            When researching competitors I realized most sites aim to enhance
            the “scientific” and “technological” side of smart products, while
            almost all of them overlook the issue this creates - a seemingly
            complicated and inaccessible product a ‘normal’ parent would have
            difficulty utilizing. Here are some examples I took inspiration
            from:
          </p>
        </div>

        <div className="two-img-baby-container">
          <img className="contained-img" src={babySrc} alt="baby" />
          <img className="contained-img" src={daynoSrc} alt="dayno" />
        </div>
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="centered-title-and-p margin-down">
          <h3>ILLUSTRATIONS</h3>
          <p className="text-container-3">
            As a design choice, I aimed to create a soft, childlike interface
            that would appeal to parents, drawing a straight line between the
            innocence and child friendly look and products that keep babies and
            parents safe & happy.
          </p>
        </div>
        <div className="birds-container hide-on-mobile">
          <img src={birds3Src} alt="bird illustration" />
          <img src={birds2Src} alt="bird illustration" />
          <img src={birds1Src} alt="bird illustration" />
        </div>
      </div>

      <MobileCarousel
        items={[
          <img src={birds3Src} alt="bird illustration" />,
          <img src={birds2Src} alt="bird illustration" />,
          <img src={birds1Src} alt="bird illustration" />,
        ]}
      />

      <div className="content-divider full-width" />

      <AnotherApps exclude={Paths.HATCH} />
    </section>
  );
}
