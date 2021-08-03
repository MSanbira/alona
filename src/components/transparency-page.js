import React from "react";
import headerSrc from "../assets/images/transparency/pend-header-exp.svg";
import featureSrc from "../assets/images/transparency/pend-feature-exp.png";
import screen1Src from "../assets/images/transparency/pend-screen1-exp.png";
import screen2Src from "../assets/images/transparency/pend-screen2-exp.png";
import zoomSrc from "../assets/images/transparency/pend-zoom-exp.png";
import zoomMSrc from "../assets/images/transparency/pend-zoom-exp-m.png";
import flowchart1Src from "../assets/images/transparency/pend-flowchart1-exp.png";
import flowchart1MSrc from "../assets/images/transparency/pend-flowchart1-exp-m.png";
import flowchart2Src from "../assets/images/transparency/pend-flowchart2-exp.png";
import flowchart2MSrc from "../assets/images/transparency/pend-flowchart2-exp-m.png";
import updatedSrc from "../assets/images/transparency/pend-updated-exp.png";
import gifSrc from "../assets/images/transparency/pend-gif-exp.png";
import iterationSrc from "../assets/images/transparency/pend-iteration-exp.png";
import iterationMSrc from "../assets/images/transparency/pend-iteration-exp-m.png";

import { Paths } from "../constants";
import AnotherApps from "./small-components/another-apps";
import ImgWithDesc from "./small-components/img-with-desc";

export default function TransparencyPage(props) {
  const mainImgStyle = { "--main-img-color": "#CFF7FE" };
  const imgAlt = "transparency by design";

  return (
    <section id="transparencyPage">
      <div className="main-img" style={mainImgStyle}>
        <img src={headerSrc} alt={imgAlt} style={{ padding: "32px 0" }} />
      </div>
      <div className="container">
        <div className="summery-text-container">
          <div className="titles">
            <h3>PENDO FOR MOBILE</h3>
            <h1>Transparency by Design</h1>
            <h4>
              allowing pendo mobile users more granular control over their app
              analytics
            </h4>
          </div>
          <div className="text-block">
            <h3>ABOUT PENDO</h3>
            <p>
              Pendo is a low-code digital adoption platform aimed at product
              managers; a tool to track and diagnose user behavior and sentiment
              on one end, and communicate with their user base on the other.
              Three years ago Pendo acquired a small Israeli startup in the
              digital adoption space, which specializes in solutions for native
              mobile frameworks. I am a part of that team, currently the only
              designer supporting the R&D hub in Israel.
            </p>
          </div>
          <div className="text-block">
            <h3>PROJECT SPECS</h3>
            <p>
              A feature created at{" "}
              <span className="highlight">Pendo for Mobile,</span>
              <br />
              as part of the design & product teams.
              <br />
              Role // UI design, Illustration
              <br />
              Year // created July, 2019
            </p>
          </div>
        </div>
      </div>

      <div className="c2c-img" style={{ background: "#F8F8F9" }}>
        <img
          src={featureSrc}
          alt={imgAlt}
          style={{ maxWidth: "100%", minWidth: "unset", width: "unset" }}
        />
      </div>

      <div className="container">
        <h3 className="text-with-margin">Problem</h3>
        <p className="text-with-margin text-container-4">
          Analytics and tagging systems often suffer from a data accuracy
          problem, many times rooted in two major things:
        </p>
        <ul className="margin-down text-container-4">
          <li>
            The accuracy of user input (did the user tag a page correctly).
          </li>
          <li>
            The way the platform analyzes that input (does Pendo “understand”
            correctly what was tagged).
          </li>
        </ul>

        <ImgWithDesc
          imgClass="margin-center contained-img shadowed"
          src={screen1Src}
          className="margin-down"
          description="The old UI: no data on the tagged page shows up while managing a page,
           no rule components visible and no way to refine a rule if needed."
        />

        <p className="text-with-margin text-container-4">
          At Pendo for Mobile, an algorithm automatically generates a rule, with
          a simple ‘tap and capture’ UI. We discovered that in many cases the
          rule generated to identify a tagged page is either over-generalizing
          or under-generalizing, resulting in inaccurate data.
        </p>
        <p>This led to two main pain points:</p>
        <ul className="text-container-4">
          <li>
            <span className="bold-text">On the user end:</span> users had no
            idea what went wrong and no ability to self-serve and fix it. They
            would also only discover a problem if they actively went looking for
            it.
          </li>
          <li>
            <span className="bold-text">On the business end:</span> we had
            created a massive overhead in technical support tickets. Users
            needed a support agent to fix anything that would go wrong.
          </li>
        </ul>
      </div>

      <div className="content-divider" />

      <div className="container">
        <h3 className="text-with-margin">Approach - User Research</h3>
        <p className="text-with-margin text-container-4">
          We spoke to support agents, quick start professional service
          engineers, developers who had been on support calls and our
          architecture and back-end engineering teams servicing these issues. We
          went through calls they had made and recorded with customers, and
          listened to them ourselves.
        </p>

        <img
          src={zoomSrc}
          className="margin-center contained-img margin-down hide-on-mobile"
          alt={imgAlt}
        />
        <img
          src={zoomMSrc}
          className="margin-center contained-img margin-down show-on-mobile"
          alt={imgAlt}
        />

        <h3 className="text-with-margin">Defining the Demographic</h3>
        <p className="text-container-4">
          There were a lot of questions around who would use this feature and
          how technical they are going to be. We knew we were aiming for a less
          technical crowd eventually, but tagging analytics for a mobile app
          does require some amount of technical know-how, even when using any of
          Pendo’s competitor platforms. We decided to start by releasing the
          feature internally and allow access to advanced users that asked for
          the feature. Later we created an open beta program.
        </p>
      </div>

      <div className="content-divider" />

      <div className="container">
        <h3 className="text-with-margin">Key Research Conclusions</h3>
        <ul className="margin-down text-container-4">
          <li>
            <span className="bold-text">Trust me to understand.</span> Users
            wanted to know which elements of their code we are using to generate
            the page rule. Just having that information would be massively
            useful to them, and they are technical enough to understand it, when
            presented correctly.
          </li>
          <li>
            <span className="bold-text">Allow me to evaluate.</span> Users
            needed a metric to assess if tagging was done correctly. Pendo
            already has retroactive analytics, so the moment a page is tagged,
            Pendo can automatically display information for that page, helping
            our users to better assess the quality of tagging. We were just not
            showing any of that information in real time.
          </li>
          <li>
            <span className="bold-text">Let me self-serve.</span> People hate to
            have to wait and talk to another human being. They just want to fix
            their problem, preferably by themselves, and get on with it.
          </li>
        </ul>

        <ImgWithDesc
          imgClass="margin-center contained-img"
          src={flowchart1Src}
          srcOnMobile={flowchart1MSrc}
          description="The old & first iteration flows. We opted to start
           with a small addition rather than over-indexing on discoverability."
        />
      </div>

      <div className="content-divider" />

      <div className="container">
        <h3 className="text-with-margin">First Iteration</h3>
        <p className="text-with-margin text-container-4">
          To solve the pain points at hand we needed to be more transparent and
          allow more granular control by adding a few capabilities to our
          product:
        </p>
        <ul className="margin-down text-container-4">
          <li>
            Show users the important properties the rule we had generated is
            hooking into, and do so in a legible way.
          </li>
          <li>
            Allow users to switch these properties on and off to refine the rule
            applied.
          </li>
          <li>
            Add the option to create a custom way to identify a page. This is a
            type of failsafe for tagging.
          </li>
        </ul>

        <ImgWithDesc
          imgClass="margin-center contained-img shadowed"
          className="margin-down"
          src={screen2Src}
          description="First iteration: users could now move to the ‘Page Rules’ tab,
           view components of the rule, and modify them. They can also add a custom rule component."
        />

        <p className="text-container-4">
          Thinking of the context of use for the feature, we knew that users
          only need these options when something goes wrong. Adding a tab in the
          area already dedicated to managing a tagged page seemed like a good
          option. We didn’t want users to feel they needed to tinker with the
          page rule for it to work, or add unnecessary custom identification
          (which might hurt data accuracy), so over-discoverability was a real
          risk. We’ve seen this behavior happen before, with our V1 product
          (prior to acquisition).
        </p>
      </div>

      <div className="content-divider" />

      <div className="container">
        <ImgWithDesc
          imgClass="margin-center contained-img"
          className="margin-down"
          src={flowchart2Src}
          srcOnMobile={flowchart2MSrc}
          description="The redesign of the legacy tagging flow - introducing the ‘page rule’ feature as part of a second iteration."
        />

        <h3 className="text-with-margin">
          Feedback - Trading Off Discoverability
        </h3>
        <p className="margin-down text-container-4">
          We originally thought this was a feature mainly for Pendo admins and
          internal technical support. But through many customer calls we found
          users were requesting access, even though it was fully available to
          them through the open beta at that point.{" "}
          <span className="bold-text">
            We found people weren’t using the feature because it was too hidden,
            and it might be available to them too late in the flow.
          </span>{" "}
          We started thinking, how could we enhance this feature by allowing
          users access to it in real time, as they are tagging?
        </p>

        <div className="right-img-to-between">
          <div>
            <h3 className="text-with-margin">Key Learnings From Release</h3>
            <p>
              From the initial release,{" "}
              <span className="bold-text">
                we learned users needed clarity and transparency first, and then
                more granular control over the accuracy of their analytics.
              </span>{" "}
              Pendo for Mobile feels a little like magic - which sounds great in
              theory. In practice, it created a problematic sense of opaqueness
              that drove users to other platforms.
            </p>
          </div>

          <ImgWithDesc
            imgClass="contained-img"
            src={updatedSrc}
            description="Adding more context and transparency to the tagging
             flow with exposed rule components and a simple percentage metic"
          />

          <p>
            Through the feedback we collected we realized this feeling of magic
            created another problem -{" "}
            <span className="bold-text">
              users were reluctant to trust Pendo data, which created a
              potential source for churn.
            </span>{" "}
            So we sought to enable users the same capabilities, but improve
            discoverability and transparency by duplicating the feature to the
            beginning of the tagging flow. Instead of waiting for data to
            process and for users to actively discover a problem, then go fix it
            - why not surface the information up-front?
          </p>
        </div>
      </div>

      <div className="content-divider" />

      <div className="container">
        <ImgWithDesc
          imgClass="margin-center contained-img shadowed"
          className="margin-down"
          src={gifSrc}
          description="The second iteration: introducing rule refinement in real time."
        />
        <h3 className="text-with-margin">Second Iteration</h3>
        <p className="margin-down text-container-4">
          We learned users needed to have this information displayed in real
          time, while they are tagging the page, even if it means the data
          showing is limited in time-frame (only for the last 24 hours, for
          instance). We also included some extra data points (percentage of
          overall visitors) to equip users with a more simplistic metric to
          gauge Pendo’s accuracy.
        </p>

        <ImgWithDesc
          imgClass="margin-center contained-img"
          className="margin-down"
          src={iterationSrc}
          srcOnMobile={iterationMSrc}
          description="From veiwing rule components (top frame) to refining
           the rule and adding custom rule components (bottom frames)."
        />

        <p className="text-container-4">
          So far, the feature is being received with much excitement and
          gratitude. Users see this feature as Pendo getting one step closer to
          working for them, instead of them having to work hard at Pendo. They
          can more easily assess the accuracy and quality of their work (tagging
          their app) and more readily trust the data Pendo is showing.
        </p>
      </div>

      <div className="content-divider full-width" />

      <AnotherApps exclude={Paths.HATCH} />
    </section>
  );
}
