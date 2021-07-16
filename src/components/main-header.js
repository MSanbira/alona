import React from "react";
import { Paths } from "../constants";
import closeSrc from "../assets/images/close.svg";
import mailSrc from "../assets/images/mail.svg";
import mobileMenuSrc from "../assets/images/mobile-menu-icon.svg";
import { getRootPath, getSubPath } from "../utils";

export default function MainHeader(props) {
  const { setIsMenuOpen, isMenuOpen } = props;

  return (
    <header>
      <div className="logo-nav-section">
        <img
          className="mobile-menu-icon"
          src={mobileMenuSrc}
          alt="menu"
          onClick={() => setIsMenuOpen(true)}
        />
        <a href={getRootPath()} className="text-btn title">
          ALONA SANBIRA
        </a>
        <div className="divider hide-on-mobile">{"//"}</div>
        <nav className={isMenuOpen ? "show" : ""}>
          <img
            className="mobile-menu-exit"
            src={closeSrc}
            alt="close"
            onClick={() => setIsMenuOpen(false)}
          />
          <a href={getSubPath(Paths.ABOUT)} className="text-btn nav-btn">
            about
          </a>
          <div className="text-btn with-img hide-on-mobile nav-btn work-btn">
            work
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L4 4L7 1"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="work-divider color-primary">select work</div>
          <div className="work-nav-links" data-menu-to-open="work">
            <a href={getSubPath(Paths.NOMNOM)} className="text-btn nav-btn">
              nomnom
            </a>
            <a href={getSubPath(Paths.HATCH)} className="text-btn nav-btn">
              hatch baby
            </a>
          </div>
          <div className="contact-and-cv">
            <a className="btn btn-small" href="mailto:alona.cr@gmail.com">
              <img src={mailSrc} alt="contact me" />
            </a>
            <a
              href="/alona-sanbira-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-small"
            >
              resume
            </a>
          </div>
        </nav>
      </div>
      <a
        href="/alona-sanbira-cv.pdf"
        target="_blank"
        className="btn btn-small"
        rel="noreferrer"
      >
        resume
      </a>
    </header>
  );
}
