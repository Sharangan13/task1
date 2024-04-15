import React from "react";
import WebHome from "./WebHome";
import WhoisAndromeda from "./WhoisAndromeda";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Page7 from "../components/Page7";


export default function WebSite() {
  return (
    <div id="mainhome">

       

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

     

      
    </div>
  );
}
