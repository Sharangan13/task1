import React from "react";
import logo from "../assets/logo3.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { animateScroll } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';


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
            <Link to="/home"><img src={logo}  alt="Logo" onClick={onSubmit} /></Link>
              <ul className="list-unstyled pt-2 pt-lg-5 text-muted fw-semibold">
                <li>
                  <div className="d-flex align-items-start ">
                    <div><GrLocation className="fs-5"/></div> <div><a className="text-decoration-none text-muted" href=""> Andromeda Solutions Ltd,123 <br />
                    Aviation Street,<br/>London,<br/>SW1A,<br/>1AA</a></div>
                  </div>
                </li>
                <li className="mt-lg-2">
                  <a className="text-decoration-none text-muted" href="tel:+12398235070">
                    <FiPhoneCall /> (239) 823 5070
                  </a>
                </li>
                <li className="mt-lg-2">
                <a className="text-decoration-none text-muted" href="mailto:contact@andromeda.com">
                    <MdOutlineEmail /> contact@andromeda.com
                  </a>
                </li>
              </ul>

              
            </div>
            <div className="d-block d-md-none px-2">
              <hr />
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5 className="fw-bold">Useful Links</h5>
              <ul className="list-unstyled fw-semibold">
                
                <Link className="text-decoration-none text-dark" to='/whoisandromeda' ><li  className="py-2" >Who is Andromeda?</li></Link> 
                <Link className="text-decoration-none text-dark" to='/features'   ><li className="py-2" >Features</li></Link> 
                <Link className="text-decoration-none text-dark" to='/roadmap'><li  className="py-2" >Roadmap</li></Link> 
                <Link  className="text-decoration-none text-dark" to='/contactus'><li  className="py-2" >Contact Us</li></Link> 
                
              </ul>
            </div>
            <div className="d-block d-md-none px-2">
              <hr />
            </div>
            <div className="col-md-6 col-lg-4 col-12 ">
              <h5 className="fw-bold">Legal</h5>

              <ul className="list-unstyled fw-semibold">
                
                <Link  className="text-decoration-none text-dark" to='/termsandcondition' ><li  className="py-2">Terms and Conditions</li></Link>             
                <Link  className="text-decoration-none text-dark" to='/privacy' ><li  className="py-2">Privacy Policy</li></Link> 

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
            <p className="text-body-secondary fw-medium">
              Copyright &copy; 2024 Andromeda. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
