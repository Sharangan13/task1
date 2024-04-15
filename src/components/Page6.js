import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

export default function Page6() {
  return (
    <div className="container py-5">

      <div className="d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-6 px-0 px-lg-5">
          <h1>Still have question?</h1>
          <p>
            We are friendly and available to respond your messages. Reach out to
            us anytime and we’ll happily answer your questions.
          </p>
          <div className="row">
            <div className="col-12  boarder">
              <div className="container">

                <div className="d-flex align-items-start bg-gray border shadow-sm p-3 rounded-3 my-4">
                  <MdOutlineMail className="me-2 fs-4 pt-1" />
                  <div>
                    <a href="#" className="text-muted text-decoration-none">
                      <span className="text-black fw-medium d-block">
                        Email Us:
                      </span>
                      contact@andromeda.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start bg-gray border shadow-sm p-3 rounded-3 my-4">
                  <LuPhoneCall className="me-2 fs-4 pt-1" />
                  <div>
                    <a href="#" className="text-muted text-decoration-none">
                      <span className="text-black fw-medium d-block">
                      Hotline:
                      </span>
                      (239) 823 5070
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start bg-gray border shadow-sm p-3 rounded-3 my-4">
                  <SlLocationPin className="me-2 fs-4 pt-1" />
                  <div>
                    <a href="#" className="text-muted text-decoration-none">
                      <span className="text-black fw-medium d-block">
                      Office Address:
                      </span>
                      Andromeda Solutions Ltd <br/>123 Aviation Street,London,SW1A 1AA
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name<span className="text-danger"> *</span></label>
              <input type="text" className="form-control border shadow-sm py-3 bg-light" id="name" />
            </div> 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address<span className="text-danger"> *</span></label>
              <input type="email" className="form-control border shadow-sm py-3 bg-light" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control border shadow-sm py-3 bg-light" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message/Question</label>
              <textarea className="form-control bg-light" id="message border shadow-sm" rows="6"></textarea>
            </div>
            <button type="submit" className="btn-signup w-100">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
