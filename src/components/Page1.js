import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { IoCalendarClear } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import image12 from "../assets/image12.png";
import image11 from "../assets/image11.png";
import unlog from "../assets/unlog.png";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Page1() {
  const [selectedItem, setSelectedItem] = useState('Scheduler');
  const [selectedImage, setSelectedImage] = useState(image12);
  const imageRef = useRef(null);

  const handleItemClick = (item, image) => {
    setSelectedItem(item);
    setSelectedImage(image);
    
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }

  return (
    <Container>
      <hr className="my-4 d-none d-md-block pt-2" />
      <div className='px-0 px-lg-5'>
        <ul className="d-flex justify-content-between list-unstyled cursor-pointer tabnav">
          <div className="d-lg-block">
            <li className={`${selectedItem === 'Scheduler' ? 'pricolor' : 'text-muted'}`} onClick={() => handleItemClick('Scheduler', image12)}><IoCalendarClear /> Scheduler<hr className={`custom-hr ${selectedItem === 'Scheduler' ? 'pribgcolor' : 'hidden'}`} /></li>
          </div>
          <div className="d-lg-block whitespace-nowrap">
            <li className={`${selectedItem === 'QTG Tests' ? 'pricolor ' : 'text-muted'}`} onClick={() => handleItemClick('QTG Tests', image11)}><IoMdCheckboxOutline /> QTG Tests<hr className={`custom-hr ${selectedItem === 'QTG Tests' ? 'pribgcolor' : 'hidden'}`} /></li>
          </div>
          <div className="d-lg-block">
            <li className={`${selectedItem === 'Maintenance' ? 'pricolor ' : 'text-muted'}`} onClick={() => handleItemClick('Maintenance', image11)}><CiSettings /> Maintenance<hr className={`custom-hr ${selectedItem === 'Maintenance' ? 'pribgcolor' : 'hidden'}`} /></li>
          </div>
          <div className="d-none d-lg-block">
            <li className={`${selectedItem === 'Crew Enroll' ? 'pricolor ' : 'text-muted'}`} onClick={() => handleItemClick('Crew Enroll', image11)}><LuUsers /> Crew Enroll<hr className={`custom-hr ${selectedItem === 'Crew Enroll' ? 'pribgcolor' : 'hidden'}`} /></li>
          </div>
          <div className="d-none d-lg-block">
            <li className={`${selectedItem === 'Simulation Status' ? 'pricolor ' : 'text-muted'}`} onClick={() => handleItemClick('Simulation Status', image11)}><GoGraph /> Simulation Status<hr className={`custom-hr ${selectedItem === 'Simulation Status' ? 'pribgcolor' : 'hidden'}`} /></li>
          </div>
        </ul>
      </div>
      <div className='position-relative' ref={imageRef}>
        <img src={selectedImage} className='img-fluid' alt='Selected Image' />

        {selectedItem !== 'Scheduler' && (
          <div className='position-absolute top-50 start-50 translate-middle'>
            <div className='row text-center'>
              <div className='col'>
                <img src={unlog} className='unlog' alt='Unlog Image' />
              </div>
            </div>
            <div className='row text-center'>
              <div className='col'>
                <Link to="/commingsoon"><button className='btn-commingsoon'>Coming Soon</button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
