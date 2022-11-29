import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-section footer"
      style={{ backgroundImage: "url(images/backgrounds/footer-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
            <a href="index.html">
              <img className="img-fluid" src="images/logo.png" alt="logo" />
            </a>
          </div>
          <nav className="col-lg-8 align-self-center mb-5">
            <ul className="list-inline text-lg-right text-center footer-menu">
              <li className="list-inline-item active">
                <a href="index.html">Home</a>
              </li>
              <li className="list-inline-item">
                <a className="page-scroll" href="#feature">
                  Feature
                </a>
              </li>
              <li className="list-inline-item">
                <a href="about.html">About</a>
              </li>
              <li className="list-inline-item">
                <a className="page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li className="list-inline-item">
                <a className="page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="list-inline-item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <nav className="col-12">
            <ul className="list-inline text-lg-right text-center social-icon">
              <li className="list-inline-item">
                <a className="facebook" href="#">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="twitter" href="#">
                  <i className="ti-twitter-alt"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="linkedin" href="#">
                  <i className="ti-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="black" href="#">
                  <i className="ti-github"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
