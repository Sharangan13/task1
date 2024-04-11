import React from 'react'
import Container from 'react-bootstrap/Container';
import image3 from "../assets/image3.png";

export default function Page2() {
  return (
    <div>
    <Container className='d-flex flex-column flex-lg-row custom-container1 py-4 py-lg-0 page2'>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <div className='w-100 px-1 px-lg-5'>
                <h1>Who is Andromeda?<hr className='custom-hr1'/></h1>
                <p className='fs-4 '>Andromeda is a software solutions provider to the aviation simulation and maintenance industries. Andromeda is a SAAS product, where customers can purchase on a subscription basis depending on their requirements. Customers can use the software at their training centers, and they can add as many technicians to use the software whilst the customer can have complete control.</p>
            </div>
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center py-4'>
            <img src={image3} className="rounded-5 img-fluid" alt="Andromeda" />
        </div>
    </Container>
</div>


  )
}
