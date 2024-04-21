import React, { useEffect, useState } from 'react';
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import { useRef } from 'react';

export default function Page3() {

   const scrollContainerRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setIsEnd(container.scrollWidth - container.clientWidth === container.scrollLeft);
    }
  }, [isEnd]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setIsEnd(container.scrollWidth - container.clientWidth === container.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft += container.clientWidth;
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft -= container.clientWidth;
      setIsEnd(false);
    }
  };


  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex  justify-content-between align-items-center'>
            <div>
            <h1 className='fw-bold'>Andromeda for</h1>
            <hr className='custom-hr2 col-4'/>
            </div>
            <div className='d-none d-lg-block'>
          {isEnd ? (
              <FaArrowLeftLong className='iconsize cursor-pointer' onClick={handleScrollLeft} />
            ) : (
              <FaArrowRightLong className='iconsize cursor-pointer' onClick={handleScrollRight} />
            )}
          </div>
          </div>

          <div>

          <div className="d-none d-lg-block d-lg-flex flex-column flex-md-row custom-scroll position-relative" ref={scrollContainerRef} onScroll={handleScroll} >
            
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
          
          </div>


          <div className=" d-block d-lg-none d-flex flex-column flex-row custom-scroll position-relative" >
            
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
