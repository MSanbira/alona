import React from "react";
import headerSrc from "../assets/images/ds/ds-header.svg";
import c2cSrc from "../assets/images/ds/DS-c2c-exp.png";
import frames3Src from "../assets/images/ds/DS-3frames-exp.png";
import value2users3Src from "../assets/images/ds/DS-value2users-exp.png";
import btn_stickersheetSrc from "../assets/images/ds/DS-btn_stickersheet-exp.png";
import doubleMatrixSrc from "../assets/images/ds/DS-double-matrix-exp.png";
import roadmapSrc from "../assets/images/ds/DS-roadmap-exp.png";
import poniesSrc from "../assets/images/ds/DS-ponies-exp.png";
import { Paths } from "../constants";
import AnotherApps from "./small-components/another-apps";
import ImgWithDesc from "./small-components/img-with-desc";

export default function DSPage(props) {
  const mainImgStyle = { "--main-img-color": "#CFF7FE" };

  return (
    <section id="hatchBabyPage">
      <div className="main-img" style={mainImgStyle}>
        <img src={headerSrc} alt="design system" style={{ padding: "32px" }} />
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

      <div className="container">
        <div className="left-title-and-p">
          <h3>Deconstruction and Research</h3>
          <p className="text-container-3">
            Our product was bursting at the seams. Engineers were confused by
            designers, and code components were being stretched to the limit. We
            were relying heavily on tribal knowledge to onboard new teammates.
            Designers weren’t knowledgeable about patterns and design guidelines
            across the app.
          </p>
        </div>

        <ImgWithDesc
          imgClass="margin-center contained-img"
          className="margin-down"
          src={frames3Src}
          description="A deck I created to help my VP of Design achieve executive buy-in"
        />
      </div>

      <div className="container">
        <div className="right-img-to-between margin-down">
          <p>
            To figure out how to approach this massive issue,{" "}
            <span className="bold-text">
              I needed to understand what our problems were.
            </span>{" "}
            I spoke to every designer on the team to understand their pain
            points and problems with the current system. I spoke to engineers
            leading the component library, frontend ICs and engineering
            managers.
          </p>

          <ImgWithDesc
            imgClass="contained-img"
            src={value2users3Src}
            description="An exert from a workshop I led on documentation during our design sprint."
          />

          <div>
            <p>There were a few key understandings I arrived at:</p>
            <ul>
              <li>
                <span className="bold-text">Misalignment.</span> Conversations
                and design decisions were being made across the org with little
                transparency and out of sync.
              </li>
              <li>
                <span className="bold-text">No documentation.</span> We were
                mostly relying on tribal knowledge and chance discoveries, and
                mistakes were being perpetuated in production.
              </li>
              <li>
                <span className="bold-text">No accountability.</span> With no
                leadership on systems and no processes to support growth in
                place, there was zero accountability on maintaining and
                contributing to the system, as well as adhering to product
                design guidelines.
              </li>
              <li>
                <span className="bold-text">Over democratization.</span> It was
                hard to make sure designers and engineers align because there
                was no single forum or person to make a final decision. Managing
                and deprecating patterns became impossible.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ImgWithDesc
          imgClass="contained-img"
          src={btn_stickersheetSrc}
          description={
            <>
              The existing system - a collection of components with no context
              and guidelines.
              <br />
              Code components deviated from design and it was difficult to call
              out a specific components
              <br />
              due to lack of alignment on naming between design and devs.
            </>
          }
        />
      </div>

      <div className="content-divider" />

      <div className="container">
        <div className="right-img-to-between margin-down">
          <div>
            <h3 className="text-with-margin">A Design System is a Product</h3>
            <p>
              There were an unlimited amount of rabbit holes I could potentially
              fall down into. No one at Pendo had ever gone through the process
              of thinking systemically about a real, intentional system. After
              delving into literature and podcasts on the subject, learning
              about the problem space, I consulted with PMs on my team to get
              their take, thinking about a system as a product.
            </p>
          </div>

          <ImgWithDesc
            imgClass="contained-img"
            src={doubleMatrixSrc}
            description="The matrix. Highlighted is the quadron with least effort to create (low resources) with the highest amount 
            of control (meaning I don’t need to ask for outside resourcing)."
          />

          <div>
            <p>Here are some takeaways I got from those conversations:</p>
            <ul className="margin-down">
              <li>What would have the highest impact?</li>
              <li>What is my lowest hanging fruit?</li>
              <li>What do I, as a designer in the design team, control?</li>
            </ul>
            <p className="margin-down">
              These questions got me thinking, and led me to create a matrix
              that visually shows our priorities as I saw them. This matrix
              helped me have conversations with my team and other teams in the
              company and align on how we would envision this product’s
              potential roadmap.
            </p>
            <p>
              Seeing the matrix (see what I did there?) made it clear where we
              should start and what would bring most value and to whom. Most
              importantly, it helped me rank priorities with two very different
              criteria: not only effort and value, but also control and the
              ability to create change.
            </p>
          </div>
        </div>
      </div>

      <div className="container margin-down">
        <ImgWithDesc
          imgClass="contained-img"
          src={roadmapSrc}
          description="The product roadmap I ended up with for the design system project."
        />
      </div>

      <div className="container">
        <div className="right-img-to-between margin-down">
          <div>
            <h3 className="text-with-margin">
              Tigers, and lions and buttons, oh my!
            </h3>
            <p>
              As the project progressed, members of my team were gradually
              exposed to my work and vision, and it resonated with them. Through
              the opportunity in the form of a design sprint,{" "}
              <span className="bold-text">
                I gathered a tiger team of designers, passionate about system,
                to start putting rubber to road and get the project off the
                ground.
              </span>{" "}
              For two full weeks we audited, synced, suggested, dug through
              production code and had many, many documentation discussions. It
              was exciting and creative and fun.
            </p>
          </div>

          <img className="contained-img" src={poniesSrc} alt="ponies" />

          <p>
            When it was all over, We had gone through color, typography, shadows
            and most of our iconography. We had an idea and a vision of what
            documentation should like and had started executing on that. Most
            importantly, we had decided we would keep the team alive, and{" "}
            <span className="bold-text">
              eat the elephant, one piece at a time.
            </span>
          </p>
        </div>
      </div>

      <div className="content-divider" />

      <AnotherApps exclude={Paths.DS} />
    </section>
  );
}
