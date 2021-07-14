import React from "react";
import Parallax from "react-rellax";
import imageAboutSrc from "../assets/images/image_about.png";
import mailSrc from "../assets/images/mail.svg";

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
