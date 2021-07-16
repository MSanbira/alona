import React from "react";
import linkedinSrc from '../assets/images/linkedin.svg';
import instagramSrc from '../assets/images/instagram.svg';


export default function MainFooter(props) {
  return (
    <footer onClick={() => props.setIsMenuOpen(false)}>
      <div className="contacts">
        <a href="mailto:alona.cr@gmail.com" className="text-btn contact-btn">
          CONTACT ME
        </a>
        <h4 className="color-primary">+972 50 335 6661</h4>
        <div className="divider">{'//'}</div>
        <h4 className="color-primary">alona.cr@gmail.com</h4>
      </div>
      <div className="socials hide-on-mobile">
        <a
          className="btn icon-btn"
          href="https://www.linkedin.com/in/alona-sanbira-ux/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinSrc} alt="linkedin" />
        </a>
        <a
          className="btn icon-btn"
          href="https://www.instagram.com/betterdonethanpurfect/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramSrc} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}
