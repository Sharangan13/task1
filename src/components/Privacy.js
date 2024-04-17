import React from 'react';
import Header from './Header';

export default function Privacy() {
  return (
    <div>
        <Header/>
        <div className='container mt-3 mt-lg-5'>
      <div className="row justify-content-center ">
        <div className="col-12  px-3 privacy">
          <h1 className="text-center mb-0 mb-lg-2  py-3 fw-bold text-black">Privacy Policy<hr className='custom-hrprivacy'/></h1>
          
          <p>At Andromeda, we prioritize the privacy and security of our customers. Our comprehensive privacy policy reflects our dedication to securing your information. We collect and process data solely to deliver our premium SAAS solution for simulation and maintenance excellence. The information acquired is used to personalize user experiences, manage subscriptions, and ensure the optimal functioning of our software.</p>
          <p>Andromeda strictly adheres to industry best practices to protect your data from unauthorized access, disclosure, alteration, and destruction. We do not share your personal information with third parties without your explicit consent, except as required by law. Our privacy policy outlines your rights regarding the collection and use of your data, providing transparency and clarity in our practices. We continually review and update our privacy measures to align with evolving regulations and standards, ensuring that your trust in Andromeda is well-placed.</p>
          <h3 className="mt-5 fw-medium">GDPR</h3>
          <p>Andromeda is completely committed to complying with the General Data Protection Regulation. Our GDPR page is a resource that informs users on their rights, the legal basis for data processing, and our obligations as a data controller. We respect your right to control your personal data, and our GDPR website outlines the mechanisms through which you can exercise these rights, including the right to access, rectify, and erase personal information.</p>
          <p>Andromeda assures that all data processed is lawful, fair, and transparent. We have implemented robust security measures to protect your data and maintain its confidentiality.  Our GDPR page also provides information on how we handle data breaches and the procedures in place to notify affected individuals and the relevant authorities promptly. By choosing Andromeda, you can trust that your data is handled responsibly and in accordance with GDPR regulations.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
