import React from "react";
import facebook from "../../images/social/facebook.png";
import twitter from "../../images/social/twitter.png";
import instagram from "../../images/social/instagram.png";
import("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

const Footer = () => {
  const today = new Date();
const year = today.getFullYear();

  return (
    <div className="container-fluid bg-dark text-white mt-3 p-3 ">
      <div className="row">
        <div style={{ fontfamily: "Roboto" }} className="col-lg-3">
          <p className="p-3">
            <i>
              on the other hand, we denounce with righteous indignation and men
              who are so beguiled and demoralized by the charms of pleasure of
              the moment.
            </i>
          </p>
          <img className="w-25" alt="" />
        </div>
        <div style={{ fontFamily: "Helvetica" }} className="col-lg-3">
          {" "}
          <p className="text-warning">
            <b>OUR POLICIES</b>
          </p>
          <p>FAQ</p>
          <p>privacy policy</p>
          <p>cookie policy</p>
        </div>
        <div style={{ fontFamily: "Helvetica" }} className="col-lg-3">
          {" "}
          <p className="text-warning">
            <b>ABOUT US</b>
          </p>
          <p>our company</p>
          <p>our history</p>
          <p>contact</p>
        </div>
        <div style={{ fontFamily: "Helvetica" }} className="col-lg-3">
          {" "}
          <p className="text-warning">
            <b>FOLLOW US ON</b>
          </p>
          <img style={{ margin: "3px" }} src={facebook} alt="" />
          <img style={{ margin: "3px" }} src={twitter} alt="" />
          <img style={{ margin: "3px" }} src={instagram} alt="" />
        </div>
      </div>
     <footer className="text-center">
        <p>
          <small>copyright @ <span className="text-warning">{year}</span> </small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
