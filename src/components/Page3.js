import React from 'react';
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

export default function Page3() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col'>
          <div>
            <h1 className='fw-bold'>Andromeda for</h1>
            <hr className='custom-hr2'/>
          </div>
          <div className="d-none d-lg-block d-lg-flex flex-column flex-md-row custom-scroll position-relative" >
            
            <div className='position-relative p-2'>
              <img src={image4} className="rounded-4 me-2 custom-scroll-image  " alt="Andromeda Image 1" />
              <div className="image-name-overlay">Flight training centers </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image5} className="rounded-4 me-2 custom-scroll-image " alt="Andromeda Image 2" />
              <div className="image-name-overlay">Aviation academies </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image6} className="rounded-4 me-2 custom-scroll-image " alt="Andromeda Image 3" />
              <div className="image-name-overlay">Flight schools </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image7} className="rounded-4 me-2 custom-scroll-image " alt="Andromeda Image 4" />
              <div className="image-name-overlay">Flight training centers</div>
            </div>
            
          </div>


          <div className=" d-block d-lg-none d-flex flex-column flex-md-row custom-scroll position-relative" >
            
            <div className='position-relative p-2'>
              <img src={image4} className="rounded-4 me-2 custom-scroll-image img-fluid " alt="Andromeda Image 1" />
              <div className="image-name-overlay">Flight training centers </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image5} className="rounded-4 me-2 custom-scroll-image img-fluid" alt="Andromeda Image 2" />
              <div className="image-name-overlay">Aviation academies </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image6} className="rounded-4 me-2 custom-scroll-image img-fluid" alt="Andromeda Image 3" />
              <div className="image-name-overlay">Flight schools </div>
            </div>

            <div className='position-relative p-2'>
              <img src={image7} className="rounded-4 me-2 custom-scroll-image img-fluid" alt="Andromeda Image 4" />
              <div className="image-name-overlay">Flight training centers</div>
            </div>
            
          </div>


        </div>
      </div>
    </div>
  );
}
