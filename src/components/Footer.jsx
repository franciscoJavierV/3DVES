import React from "react";
import "../assets/styles/Footer.css";
import linkedinImg from "../assets/images/iconmonstr-linkedin-3.svg";
import gitHubImg from "../assets/images/iconmonstr-github-4.svg";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-socials">
          <Link className="footer-link" to="/">
            <img src={gitHubImg} alt="github" className="footer-logo-img" />
          </Link>
          <Link className="footer-link" to="/">
            <img src={linkedinImg} alt="linkedin" className="footer-logo-img" />
          </Link>
        </div>
        <div className="form-copy">
          <span className="footer-copy">Desarrollado por Francisco Vasquez</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
