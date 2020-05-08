import React from "react";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--info">
        <Hours />
        <Contact />
      </div>

      <div className="footer--legal">
        <a href="#" className="privacy-policy">
          privacy policy
        </a>
        <p className="copyright">
          ©2019 Brown Sales, Inc. All Rights Reserved.
        </p>
      </div>

      {/* FACEBOOK LINK: href='https://www.facebook.com/pages/Brown-Sales/162169013801027'*/}
    </footer>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2 className="contact--title">Contact</h2>

        <div className="contact--item contact--item__phone">
          <p>Phone</p>
          <a href="tel:6029144579" className="contact--link">
            602-914-4579
          </a>
        </div>

        <div className="contact--item contact--item__email">
          <p>Email</p>
          <a
            href="mailto:office.brownsales@gmail.com?Subject=Inquiry%20to%20Brown%20Sales,%20referred%20from%20website"
            className="contact--link"
          >
            office.brownsales@gmail.com
          </a>
        </div>

        <div className="contact--item contact--item__address">
          <p>Address</p>
          <a href="#" className="contact--link">
            Brown Sales, Inc<br></br>2626 E Washington St<br></br>2Phoenix, AZ
            85034
          </a>
        </div>

        <a
          href="https://www.facebook.com/pages/Brown-Sales/162169013801027"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-facebook"
        >
          <FAIcon
            icon={faCircle}
            color="#ffffff"
            className="footer-facebook-circle"
          />

          <FAIcon
            icon={faFacebookSquare}
            color="#3a559f"
            className="footer-facebook-icon"
          />
        </a>
      </div>
    </div>
  );
};

const Hours = () => {
  return (
    <div className="hours">
      <div className="hours__wrapper">
        <h2 className="hours--title">Hours</h2>
        <div className="hours--days">
          <div className="hours--day">
            <p>Monday-Friday</p>
            <p>7:00 AM - 4:30 PM</p>
          </div>
          <div className="hours--day">
            <p>Saturday</p>
            <p>8:00 AM - 11:00 PM</p>
          </div>
          <div className="hours--day">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
