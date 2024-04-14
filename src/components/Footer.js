import React from "react";
import logo from "../assets/logo3.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { Link , animateScroll } from 'react-scroll';
import { useNavigate } from "react-router-dom";

export default function Footer() {

  
  function onSubmit() {
    animateScroll.scrollToTop({
      duration: 100,
      smooth: 'easeInOutQuad'
    });
  }

  return (
    <>
      <div className="Footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <img src={logo} />
              <ul className="list-unstyled pt-2 pt-lg-5">
                <li>
                  <a>
                    <IoLocationOutline /> Andromeda Solutions Ltd,123 <br />
                    Aviation Street,London,SW1A,1AA
                  </a>
                </li>
                <li className="mt-lg-2">
                  <a>
                    <FiPhoneCall /> (239) 823 5070
                  </a>
                </li>
                <li className="mt-lg-2">
                  <a>
                    <MdOutlineEmail /> contact@andromeda.com
                  </a>
                </li>
              </ul>

              
            </div>
            <div className="d-block d-md-none px-2">
              <hr />
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <a>
                  <li>Who is Andromeda?</li>
                </a>
                <a>
                  <li>Features</li>
                </a>
                <a>
                  <li>Roadmap</li>
                </a>
                <a>
                  <li>Contact Us</li>
                </a>
              </ul>
            </div>
            <div className="d-block d-md-none px-2">
              <hr />
            </div>
            <div className="col-md-6 col-lg-4 col-12 ">
              <h5>Legal</h5>

              <ul className="list-unstyled">
                <a>
                  <li>Terms and Conditions</li>
                </a>
                <a>
                  <li>Privacy Policy</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between pt-4">
            
              <div className="footer-icons d-flex justify-content-center align-items-center ">
                <a className="mx-1">
                  <FaLinkedin className="fs-2"/>
                </a>
                <a className="mx-1">
                  <FaFacebook className="fs-2"/>
                </a>
              </div>
              <div>
              <button className="btn-footer text-nowrap" onClick={onSubmit}>
              Back to Top <FaArrowUp />
                
              </button>
              </div>
          </div>
          <div>
            <p className="text-body-secondary">
              Copyright &copy; 2024 Andromeda. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
