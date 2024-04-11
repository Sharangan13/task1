import React, { useState, useEffect } from "react";
import image14 from "../assets/image14.png";

export default function Page7() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const launchDate = new Date("2024-05-01T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid  min-vh-100 d-flex align-items-center justify-content-center countdown-bg py-4">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6">
            <div className="row ">
              <div className="col-12">
                <h1 className="display-4 fw-medium py-2 py-lg-">Countdown to Andromeda Launch</h1>
              </div>
              <div className="col-12">
                <p className="fs-2 pricolor1">
                  Get Ready for a Revolutionary Experience
                </p>
              </div>
              <div className="col-12 ">
                <div className="d-flex align-items-start justify-content-between countdowncolor px-0 px-sm-1 px-md-2">
                  <div>
                    <h1 className="fw-bold py-0 my-0">{days}</h1>
                    <p className="coutDHM">Days</p>
                  </div>

                  <div>
                    <h1 className="fw-bold py-0 my-0">{hours}</h1>
                    <p className="coutDHM">Hours</p>
                  </div>

                  <div>
                    <h1 className="fw-bold py-0 my-0">{minutes}</h1>
                    <p className="coutDHM">Minutes</p>
                  </div>
                </div>
              </div>

              <div className="col-12 position-relative">
                <input
                  type="email"
                  placeholder="Enter your email address...."
                  className="border-2  py-2 py-lg-3 px-4 my-1 my-md-3 my-lg-4  rounded-5 w-100 emailInput"
                  id="email"
              
                />
                <button className=" btn-signup position-absolute top-50 end-0 translate-middle-y mx-1 mx-lg-4 d-none d-lg-block">
                  Join now
                </button>
              </div>
              <div className="col-12 ">
              <button className="btn-signup d-block d-lg-none w-100">
                  Join now
                </button>

                </div>

             

              <div className="col-12 px-4">
                <p>
                  Read our <a href="" className="pricolor">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center img-fluid">
            <img src={image14} className="img-fluid " alt="Andromeda Launch" />
          </div>
        </div>
      </div>
    </div>
  );
}
