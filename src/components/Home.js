import React from 'react'
import plane from "../assets/plane.png";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Container  className='d-flex flex-column justify-content-center align-items-center text-center pb-5 '>
        <img src={plane} className='planeimg'></img>
        <p className='homep1 mt-2'>Empowering Aviation Excellence</p>
        <p className='phracolor  fw-bold col-12 col-lg-10'>Andromeda - Your Premier SAAS Solution for Simulation and Maintenance Excellence</p>
        <div className=' d-flex flex-column flex-md-row w-100 justify-content-md-center align-items-md-center pt-3'>
          <Link to="/requestDemo"><button className='btn-home1 col-12'>Request a DEMO</button></Link>  
            <Link to="/WhoisAndromeda"><button className='btn-home2 shadow col-12 '> Who is Andromeda?</button></Link>
        </div>
        </Container>

        </div>
  )
}
