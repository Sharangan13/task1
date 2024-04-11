import React from 'react';
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";


export default function Page4() {
  return (
    <div className='container py-5 '>   
         <div>
            <h1 className='fw-bold'>Andromeda users</h1>
            <hr className='custom-hr2'/>
          </div>   
        <div className='row position-relative d-flex flex-column flex-lg-row' >
            <div className='col position-relative my-3'> 
            <img src={image8} className="rounded-4 img-fluid"  /> 
            <div className="image-name-overlay">Train pilots </div>
            </div>
            <div className='col position-relative my-3' > 
            <img src={image9} className="rounded-4 img-fluid"  />
            <div className="image-name-overlay">Maintain, repair and configure issues </div>  
            </div>
        </div>
      
    </div>
  );
}
