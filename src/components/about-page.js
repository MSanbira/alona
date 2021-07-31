import React from "react";
import Parallax from "react-rellax";
import imageAboutSrc from "../assets/images/image_about.png";
import mailSrc from "../assets/images/mail.svg";
import appSrc from "../assets/images/about/app-exp.png";
import localSrc from "../assets/images/about/local-exp.png";
import emojiSrc from "../assets/images/about/emoji-exp.png";
import mentoringSrc from "../assets/images/about/mentoring-exp.png";
import createSrc from "../assets/images/about/create-exp.png";
import pixelSrc from "../assets/images/about/pixel-exp.png";
import academicSrc from "../assets/images/about/academic-exp.png";

const createMag1 = '%d7%9b%d7%a0%d7%99%d7%a1%d7%94-%d7%9c%d7%aa%d7%97%d7%95%d7%9d/%d7%a6%d7%a2%d7%93%d7%99%d7%9d-%d7%a8%d7%90%d7%a9%d7%95%d7%a0%d7%99%d7%9d-%d7%91%d7%aa%d7%a2%d7%a9%d7%99%d7%99%d7%94-%d7%a1%d7%99%d7%a4%d7%95%d7%a8%d7%99%d7%9d-%d7%90%d7%99%d7%a9%d7%99%d7%99%d7%9d';
const createMag2 = '%d7%94%d7%9b%d7%97-%d7%a9%d7%9c-%d7%b4%d7%a2%d7%95%d7%93-%d7%9c%d7%90%d7%b4-%d7%90%d7%95-%d7%90%d7%99%d7%9a-%d7%a7%d7%a8%d7%95%d7%9c-%d7%93%d7%95%d7%95%d7%a7-%d7%94%d7%a4%d7%9b%d7%94-%d7%90%d7%95';

export default function AboutPage(props) {
  return (
    <section id="aboutPage">
      <Parallax
        as="img"
        className="about-img"
        src={imageAboutSrc}
        alt="alona and hemda"
      />
      <div className="about-text-and-btns">
        <p>
          Hi, I'm Alona, a product designer with background in
          <span className="highlight">education and psychology,</span> with four
          years’ experience in designing product UX, both as a lead and as part
          of a team of designers.
        </p>
        <p>
          I am fully proficient in design tools and implementing processes of
          market and user research, ideation and rapid prototyping. I’m a firm
          believer in teamwork, I feel it brings the best out of us, and helps
          us grow as professionals. I Majored in learning technologies and I
          taught myself how to use nearly every design tool known to man.
          <span className="highlight">Currently sporting Figma.</span>
        </p>
        <p>
          I love to cook and bake and I am an avid runner in my free time. Good
          design moves me, and I believe every user should experience
          excellently and elegantly designed products.
        </p>
        <p>
          I can be reached via email @
          <span className="highlight">alona.cr@gmail.com</span>
        </p>

        <div className="content-divider" />

        <div className="extracurricular-container">
          <h3>Some extracurricular stuff I’ve been working on recently...</h3>
          <ExtracurricularSection
            imgSrc={appSrc}
            title="Designing for a Cause"
            bodyText={`This year I had the chance to participate in a grassroots movement
              to help people find places to protest, with the government
              lockdowns and the limitation on freedom of speech in Israel.
              We ended up with a really cool app, made over the course of a single evening.`}
            links={[
              {
                text: "Figma Link",
                href: "https://www.figma.com/file/CkbAnXP3VypGIxpTZylIdf/RiseApp?node-id=175%3A680",
              },
            ]}
          />
          <ExtracurricularSection
            imgSrc={localSrc}
            title="Local Figma Meetups"
            bodyText={`As an active member of the Israeli Figma community,
              I had the chance to speak at a digital community event,
              hosted by Pendo and broadcasted from our Hertzliya office.`}
          />
          <ExtracurricularSection
            imgSrc={emojiSrc}
            title="Emoji Catcher"
            bodyText={`My husband and I build things together.
              Our most recent pet project is a Chrome extension
              we created together as a browser operated game to
              catch emojis and ware off the daily grind. Feedback has been incredible!`}
            links={[
              {
                text: "We’re live in the extension marketplace!",
                href: "https://chrome.google.com/webstore/detail/emoji-catcher/jbbmffejmaheleofjaefpfcojebpflhf",
              },
            ]}
          />
          <ExtracurricularSection
            imgSrc={mentoringSrc}
            title="Mentoring Young Designers"
            bodyText={`During this year around 10 designers have
              independently approached me to ask for feedback and 
              help during various points in their recruitment processes 
              (home assignment, team crit, manager interview). ~80% of those designers have recieved offers.`}
          />
          <ExtracurricularSection
            imgSrc={createSrc}
            title="Featured in Publications"
            bodyText={`During this year I was featured twice in
              CreateMagazine (One of the largest Hebrew digital publications
              in the Design and UX field), and published a
              Medium article through a large publication (BootCamp).`}
            links={[
              {
                text: "My design journey (Hebrew)",
                href: `https://www.createmagazine.co.il/${createMag1}`,
              },
              {
                text: "Getting better, faster (Hebrew)",
                href: `https://www.createmagazine.co.il/ux/${createMag2}`,
              },
              {
                text: "Getting the design feedback you need",
                href: "https://bootcamp.uxdesign.cc/getting-the-design-feedback-you-need-d30eb72012b1",
              },
            ]}
          />
          <ExtracurricularSection
            imgSrc={pixelSrc}
            title="The Pixelated Podcast"
            bodyText={`My husband and I have start a design-engineering
              podcast in Hebrew, called ‘Pixelated’, where we dicuss anything
              and everything code and design related in the world of digital
              products. We’re still just starting out, but will be very happy
              for any feedback and suggestions!`}
            links={[
              {
                text: "We’re on Spotify!",
                href: "https://open.spotify.com/show/4y2H3ULRIo4S6gMHh2COE1?si=D8p-4k-VT2GtdOy2372f3w&nd=1",
              },
            ]}
          />
          <ExtracurricularSection
            imgSrc={academicSrc}
            title="Academic Design Critiques"
            bodyText={`I was recently invited to be a part of a critique panel
              at an experience and visual design course finals session.
              The critique was held by the largest Israeli private design academy, Netcraft.`}
            links={[
              {
                text: "This is What They Do",
                href: "https://netcraftacademy.co.il/",
              },
            ]}
          />
        </div>

        <div className="btn-container">
          <a className="btn btn-long" href="mailto:alona.cr@gmail.com">
            <img src={mailSrc} alt="contact me" />
            <span className="hide-on-mobile">Email me</span>
          </a>
          <a
            href="/alona-sanbira-cv.pdf"
            target="_blank"
            className="btn btn-long"
            rel="noreferrer"
          >
            resume
          </a>
        </div>
      </div>
    </section>
  );
}

const ExtracurricularSection = (props) => {
  const { imgSrc = "", title = "", bodyText = "", links = [] } = props;

  return (
    <div className="extracurricular-section">
      <img src={imgSrc} alt="extracurricular" />
      <h3>{title}</h3>
      <p>{bodyText}</p>
      {links.map(({ text, href }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer">
          {text}
        </a>
      ))}
    </div>
  );
};
