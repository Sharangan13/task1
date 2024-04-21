import React from 'react';
import Header from './Header';

export default function Terms() {

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="text-start text-lg-center mb-4">Terms and Conditions</h1>
        <h6 className='px-2'>Last updated: April 1, 2024</h6>
        <hr></hr>

        <ol className='mt-5 termspage'>
          <li>
            <h4>Intellectual Property</h4>
            <p>The content and materials on this website, including but not limited to text, graphics, logos, and images, are the property of Adage Digital and are protected by applicable copyright and trademark laws. You may not use, reproduce, or distribute any content from this website without our prior written permission.</p>
          </li>

          <li>
            <h4>Website Use</h4>
            <p>You agree to use our website only for lawful purposes, in a way that does not infringe upon the rights of others or restrict or inhibit anyone else's use and enjoyment of the website. Prohibited activities include but are not limited to transmitting any unlawful material, engaging in unauthorized advertising, or interfering with the functioning of the website.</p>
          </li>

          <li>
            <h4>Privacy Policy</h4>
            <p>Our Privacy Policy governs the collection, use, and disclosure of personal information you provide to us through the website. By using our website, you consent to the collection and use of your personal information as outlined in the Privacy Policy.</p>
          </li>

          <li>
            <h4>Disclaimer</h4>
            <p>The information provided on our website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on it.</p>
          </li>

          <li>
            <h4>Limitation of Liability</h4>
            <p>In no event shall Adage Digital or its directors, employees, or affiliates be liable for any loss or damages, including but not limited to indirect or consequential loss or damage, arising from the use of or inability to use the website or any content therein.</p>
          </li>

          <li>
            <h4>External Links</h4>
            <p>Our website may include links to external websites that are not controlled or maintained by Adage Digital. We do not endorse or assume any responsibility for the content or practices of these websites. Visiting external links is done at your own risk.</p>
          </li>

          <li>
            <h4>Changes to the Terms and Conditions</h4>
            <p>Adage Digital reserves the right to modify or replace these terms and conditions at any time without prior notice. By continuing to use the website after any such changes, you accept and agree to the modified terms and conditions.</p>
          </li>
        </ol>

        <p className='fw-medium px-1 mt-5 termsphra '>These terms and conditions are governed by and construed in accordance with the laws of England, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in England.</p>
        <p className='fw-medium px-1 termsphra'>If you have any questions or concerns about these terms and conditions, please contact us at (+) 44 757 648 5374.</p>

       
        
      </div>
    </div>
  );
}
