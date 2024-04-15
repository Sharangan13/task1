import React from "react";
import { IoCalendarClear } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

export default function Page5() {
  return (
    <div className="container  custom-container2 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-5">
          <h1 className="bg-white text-start px-1 py-1">
            Selected Andromeda Features
            <hr className="custom-hr1" />
          </h1>
        </div>
      </div>
      <div className="row py-5 bg-white rounded-5 m-1 m-lg-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5 ">
          <IoCalendarClear className="commingsoonatag fs-2 " />
          <h2>Scheduler</h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
            The Scheduler feature in Andromeda facilitates efficient
            organization and management of training sessions, maintenance tasks,
            and simulator usage.
          </p>
          <a href="" className="commingsoonatag text-decoration-none fw-bold ">
            Coming soon <FaArrowRight />
          </a>
        </div>
        <div className="col-12 col-lg-6  pt-4 pt-lg-0 ">
          <div className="text-center">
            <iframe style={{ height: "388px" , width:"592px" }} 
            className="img-fluid"
              width="300px"
              height="600px"
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
      <div className="row py-5 bg-white rounded-5 m-1 m-lg-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <CiSettings className="commingsoonatag fs-2" />
          <h2>Maintenance</h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
            The Maintenance module within Andromeda is designed to streamline
            and oversee the upkeep, repair, and configuration of simulators used
            by aviation training centers.
          </p>
          <a href="" className="commingsoonatag text-decoration-none fw-bold">
            Coming soon <FaArrowRight />
          </a>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0">
        <div className="text-center ">
            <iframe style={{ height: "388px" , width:"592px" }} 
            className="img-fluid"
        width=""
        height=""
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
      <div className="row py-5 bg-white rounded-5 m-1 m-lg-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <IoMdCheckboxOutline className="commingsoonatag fs-2" />
          <h2>QTG Tests</h2>
          <p className="pe-0 me-0 pe-lg-5 me-lg-5 custom-features">
            The QTG module within Andromeda is designed to streamline and
            oversee the upkeep, repair, and configuration of simulators used by
            aviation training centers.
          </p>
          <a href="" className="commingsoonatag text-decoration-none fw-bold">
            Coming soon <FaArrowRight />
          </a>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0">
        <div className="text-center">
        <iframe style={{ height: "388px" , width:"592px" }} 
            className="img-fluid"
              width="300px"
              height="600px"
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
  );
}
