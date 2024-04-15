import React from "react";
import Box1 from "./roadMapBox/Box1";
import Box2 from "./roadMapBox/Box2";
import Box3 from "./roadMapBox/Box3";
import Box4 from "./roadMapBox/Box4";
import Box5 from "./roadMapBox/Box5";
import { TbSquareRotatedFilled } from "react-icons/tb";



export default function RoadMap() {
  return (
    <div>
      
      <div
        className="d-flex flex-column align-items-center justify-content-center requestDemoBgImg"
        
      >
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <div className="col-12 col-lg-6 text-center py-5 ccc">
            <h1 className="pricolor1">Roadmap</h1>
            <p className="text-justify pricolor fs-5 ">
              Stay connected with us as we continuously enhance our software
              with new features for optimal releases
            </p>
          </div>

          <div className="container row ">

            
            
            <div className="col-12 col-md-4 mb-0 mb-lg-5 d-flex flex-column align-items-center justify-content-between" >

              <div className="col-12">
              <div className="col-12  text-center d-block d-md-none">
              <div className="col-12">
                <button className="btn-roadMap mt-5 ">Q1 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "50px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>
                <Box1 />
              </div>

              <div className="col-12 ">
              <div className="col-12  text-center d-block d-md-none">
              <div
                className="d-flex justify-content-center"
                style={{ height: "120px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap  ">Q2 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "50px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>
                <div className="d-none d-md-block"><Box3 /></div>
                <div className="d-block d-md-none"><Box2 /></div>
              </div>


              <div className="col-12">
              <div className="col-12  text-center d-block d-md-none">
              <div
                className="d-flex justify-content-center"
                style={{ height: "120px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap  ">Q3 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "50px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>
              <div className="d-none d-md-block"><Box5 /></div>
                <div className="d-block d-md-none"><Box3 /></div>
              </div>
            </div>
            

            <div className="col-12 col-md-4 text-center d-none d-md-block">
              <div className="col-12">
                <button className="btn-roadMap mt-5 ">Q1 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "250px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap ">Q2 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "300px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap">Q3 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "300px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap ">Q4 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "140px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-future ">FUTURE</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "100px" }}
              >
                <div className="customhr "></div>
              </div>
              <TbSquareRotatedFilled className="display-4 customhr1"/>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-around">

            <div className="col-12 ">
              <div className="col-12  text-center d-block d-md-none">
              <div
                className="d-flex justify-content-center"
                style={{ height: "120px" }}
              >
                <div className="customhr"></div>
              </div>
              <div className="col-12">
                <button className="btn-roadMap  ">Q4 - 2024</button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: "50px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>
                <div className="d-none d-md-block"><Box2 /></div>
                <div className="d-block d-md-none"><Box4 /></div>
                <div
                className="d-flex justify-content-center d-block d-md-none"
                style={{ height: "120px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>


              <div className="col-12 ">
              <div className="col-12  text-center d-block d-md-none">
              <div className="col-12">
                <button className="btn-future ">FUTURE</button>
              </div>
              <div
                className="d-flex justify-content-center "
                style={{ height: "50px" }}
              >
                <div className="customhr"></div>
              </div>
              </div>
              <div className="d-none d-md-block"><Box4 /></div>
                <div className="d-block d-md-none"><Box5 /></div>
                <div
                className=" d-block d-md-none d-flex justify-content-center"
                style={{ height: "110px" }}
              >
                <div className="customhr "></div>
              </div>
              <div className="d-block d-md-none">
              <TbSquareRotatedFilled className="display-4 customhr1 text-center col-12" />

              </div>
              
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
