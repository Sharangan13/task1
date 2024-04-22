import React from 'react'
import Header from './Header'



export default function RequestDemo() {
  return (
    
        
        <div >
            <div className='requestDemoHeaderBgImg mb-4'>
               <Header/> 

               <div className=' container d-flex flex-column align-items-center justify-content-center'>
        <div className=' d-flex flex-column align-items-center justify-content-center'>
        <div className='col-12 col-lg-6 text-center pt-4 pt-lg-5 '>
        <h1 className='pricolor1'>Request a DEMO</h1>
        <p className='text-justify pricolor fs-5'>Take the first step towards enhancing your training and maintenance center experience by requesting a demo today.</p>
        </div>
        </div>
        </div>
        </div>      
           
        <div className=' container d-flex flex-column align-items-center justify-content-center pt-2'>
        <div className=' d-flex flex-column align-items-center justify-content-center col-12 col-lg-5'>
        

        <form className='col-12 pb-5 px-2'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name<span className="text-danger"> *</span></label>
                <input type="text" className="form-control border bg-light  shadow-sm py-2  " id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address<span className="text-danger"> *</span></label>
                <input type="email" className="form-control border bg-light shadow-sm py-2" id="email"  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Company</label>
                <input type="text" className="form-control border bg-light shadow-sm py-2" id="phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control border bg-light shadow-sm py-2" id="phone" required  />
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
