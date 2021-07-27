import React from "react";
import { Carousel, News, Achievements,Donation,Member,Testimonials, Contact } from "../index";
import "./home.css"
function Home() {
  return (
    <>
      <Carousel />
      <News />
      <Achievements />
      <Donation/>
      <Member/>
      <Testimonials/>
      <Contact text={"Contact Us"}/>

     
    </>
  );
}

export default Home;
