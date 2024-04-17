import React from 'react'
import Container from 'react-bootstrap/Container';
import image3 from "../assets/image3.png";

export default function Page2() {
  return (
    <div className='custom-container1'>
    <Container className='d-flex flex-column flex-lg-row  py-4 py-lg-0 page2'>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <div className='w-100 px-1 px-lg-5 page2phr'>
                <h1>Who is Andromeda?<hr className='custom-hr1'/></h1>
                <p>Andromeda is a leading software solutions provider specializing in aviation simulation and maintenance. Our cutting-edge product operates on a Software as a Service (SAAS) model and offers a versatile subscription-based framework that is precisely tailored to meet the unique needs of our valued clients. Designed to improve training center performance, our solution gives clients the ability to enlist multiple technicians under their account while maintaining complete control over the software's deployment. Elevate your aviation training and maintenance endeavors with Andromeda - a sophisticated and versatile software solution meticulously crafted with industry experts in mind.</p>
            </div>
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center py-4'>
            <img src={image3} className="rounded-5 img-fluid" alt="Andromeda" />
        </div>
    </Container>
</div>


  )
}
