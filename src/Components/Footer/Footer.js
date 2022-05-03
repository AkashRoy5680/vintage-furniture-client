import React from "react";
import facebook from "../../images/social/facebook.png"
import twitter from "../../images/social/twitter.png"
import github from "../../images/social/github.png"



const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white mt-3 p-4 ">
  <div  className="row">
    <div style={{}} className="col-lg-3">
        <p className="p-3">on the other hand, we denounce with righteous indignation and men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
    <img className="w-25"  alt="" />
    </div>
    <div style={{fontFamily:"Helvetica"}} className="col-lg-3"> <p><b>OUR POLICIES</b></p>
        <p>FAQ</p>
        <p>privacy policy</p>
        <p>cookie policy</p>
    </div>
    <div style={{fontFamily:"Helvetica"}} className="col-lg-3"> <p><b>ABOUT US</b></p>
        <p>our company</p>
        <p >our history</p>
        <p>contact</p>
    </div>
    <div style={{fontFamily:"Helvetica"}} className="col-lg-3"> <p><b>FOLLOW US ON</b></p>

        <img style={{margin:"3px"}} src={facebook} alt="" />
        <img style={{margin:"3px"}}  src={twitter} alt="" />
        <img style={{margin:"3px"}} src={github} alt="" />
        
    </div>
  </div>
</div>
  );
};

export default Footer;
