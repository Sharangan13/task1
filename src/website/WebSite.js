import React from "react";
import Header from "../components/Header";
import WebHome from "./WebHome";
import WhoisAndromeda from "./WhoisAndromeda";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import RoadMap from "../components/RoadMap";

export default function WebSite() {
  return (
    <div id="mainhome">

       <div>
        <Header/>
      </div>

      <div id="home">
        <WebHome />
      </div>

      <div id="whoisandromeda">
        <WhoisAndromeda />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="contactus">
        <ContactUs />
      </div>

      <Page7 />

      <div id="footer">
        <Footer/>
      </div>

      
    </div>
  );
}
