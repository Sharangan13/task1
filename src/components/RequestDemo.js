import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Vector2 from "../assets/Vector2.png";

export default function RequestDemo() {
  return (
    
        
        <div className='container'>
           
        <div className='d-flex flex-column align-items-center justify-content-center requestDemoBgImg'>
        <div className=' d-flex flex-column align-items-center justify-content-center'>
        <div className='col-12 col-lg-6 text-center py-5'>
        <h1 className='pricolor1'>Request a DEMO</h1>
        <p className='text-justify pricolor fs-5'>Take the first step towards enhancing your training center management experience by requesting a demo today.</p>
        </div>

        <form className='col-12 col-lg-6 pb-5'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name<span className="text-danger"> *</span></label>
                <input type="text" className="form-control border bg-light  shadow-sm" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address<span className="text-danger"> *</span></label>
                <input type="email" className="form-control border bg-light shadow-sm" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control border bg-light shadow-sm" id="phone" />
            </div>

            <div className='py-4'>

            <button type="submit" className="btn-signup w-100">Submit Request</button>

            </div>
        </form>

    </div>
    </div>
   
</div>

        
    
  )
}
