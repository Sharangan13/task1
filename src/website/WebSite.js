import React from "react";
import WebHome from "./WebHome";
import WhoisAndromeda from "./WhoisAndromeda";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Page7 from "../components/Page7";
import Header from "../components/Header";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";


export default function WebSite() {
  return (
    <div>
       
      <div id="home">
        <WebHome />
      </div>

      <div id="whoisandromeda">
      <Page2/>
        <Page3/>
        <Page4/>
      </div>

      <div id="features">
        <Page5 />
      </div>

      <div id="contactus">
        <Page6 />
      </div>

      <Page7 />

     

      
    </div>
  );
}
