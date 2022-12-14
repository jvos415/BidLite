import React from "react";
import LinkedIn from "../../images/linkedIn.png";
import GitHub from "../../images/github.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="sticky-footer">
      <div className="footer-flex">
        <h4 className="footer-flex-left footer-item">© BidLite 2022 </h4>
        <div className="about">
          <h2 id="created-by">Created By John Voskuyl</h2>
          <a href="https://github.com/jvos415" target="_blank" rel="noreferrer">
            <img id="github" src={GitHub} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/john-voskuyl-a2214083/" target="_blank" rel="noreferrer">
            <img id="linkedin" src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;