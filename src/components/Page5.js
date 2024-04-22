import React from "react";
import { IoCalendarClear } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Page5() {
  return (
    <div className="custom-container2">
    <div className="container  py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-1 mt-lg-5">
          <h1 className="page5h1">
            Selected Andromeda Features
            <hr className="custom-hrPage5" />
          </h1>
        </div>
      </div>
      <div className="row py-5 bg-white customrounded mt-2 mt-lg-5 mx-1 mx-lg-0 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5 ">
          <IoCalendarClear className="commingsoonatag fs-2 " />
          <h2>Scheduler Function</h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
          The Scheduler function in Andromeda simplifies the effective organisation and supervision of training sessions, maintenance tasks, and simulator utilization. This function is intended to improve operational efficiency and enable seamless organisation for professionals in the aviation industry.
          </p>
          <Link to="/requestDemo" className="commingsoonatag text-decoration-none fw-bold">
            Coming soon <FaArrowRight />
          </Link>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0">
          <div className="text-center col-12 pe-0 py-0 pe-lg-5 py-lg-2">
            <iframe 
            className="img-fluid rounded-4"
              src="https://www.youtube.com/embed/PWDQpEBq_pU?si=Llj0jYUx66hZOXpw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row py-5 bg-white customrounded mt-5 mx-1 mx-lg-0 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <CiSettings className="commingsoonatag fs-2" />
          <h2>Maintenance</h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
          The Maintenance module integrated into Andromeda is meticulously crafted to optimize and supervise the maintenance, repair, and configuration processes of simulators utilized by aviation training centers. This feature ensures a streamlined and efficient approach to the upkeep of simulation equipment, contributing to the overall operational excellence of the training facilities.
          </p>
          <Link to="/requestDemo" className="commingsoonatag text-decoration-none fw-bold">
            Coming soon <FaArrowRight />
          </Link>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0 ">
        <div className="text-center col-12 pe-0 py-0 pe-lg-5 py-lg-2">
            <iframe 
            className="img-fluid rounded-4"
        src="https://www.youtube.com/embed/PWDQpEBq_pU?si=Llj0jYUx66hZOXpw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
</div>

        </div>
      </div>
      <div className="row py-5 bg-white customrounded mt-5 mx-1 mx-lg-0 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <IoMdCheckboxOutline className="commingsoonatag fs-2" />
          <h2>Qualification Test Guide (QTG) </h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
          The Qualification Test Guide (QTG) module of Andromeda is precisely designed to improve the efficiency of managing the maintenance, repair, and configuration operations of simulators utilized by aviation training institutions. This function is a cornerstone for expediting and optimizing simulation equipment maintenance, which contributes considerably to training facility operational excellence.
          </p>
          <Link to="/requestDemo" className="commingsoonatag text-decoration-none fw-bold">
            Coming soon <FaArrowRight />
          </Link>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0">
        <div className="text-center col-12 pe-0 py-0 pe-lg-5 py-lg-2">
        <iframe
            className="img-fluid rounded-4"
              src="https://www.youtube.com/embed/PWDQpEBq_pU?si=Llj0jYUx66hZOXpw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
