import React from "react";
import { Paths } from "../constants";
import closeSrc from '../assets/images/close.svg';
import mailSrc from '../assets/images/mail.svg';

export default function MainHeader(props) {
  return (
    <header>
      <div className="logo-nav-section">
        <img
          className="mobile-menu-icon"
          src="/assets/images/mobile menu icon.svg"
          alt="menu"
          data-open-menu="nav"
        />
        <a href="/" className="text-btn title">
          ALONA SANBIRA
        </a>
        <div className="divider hide-on-mobile">{'//'}</div>
        <nav data-menu-to-open="nav">
          <img
            className="mobile-menu-exit"
            src={closeSrc}
            alt="close"
          />
          <a href={Paths.ABOUT} className="text-btn nav-btn">
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
            <a href={Paths.NOMNOM} className="text-btn nav-btn">
              nomnom
            </a>
            <a href={Paths.HATCH} className="text-btn nav-btn">
              hatch baby
            </a>
          </div>
          <div className="contact-and-cv">
            <div className="btn btn-small">
              <img src={mailSrc} alt="contact me" />
            </div>
            <a
              href='/alona-sanbira-cv.pdf'
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
      >
        resume
      </a>
    </header>
  );
}
