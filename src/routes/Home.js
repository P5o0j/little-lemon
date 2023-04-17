import React from "react";
import Heading from "../components/Heading";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

 const Home = () => {
  return (
    <>
      <Heading />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}
export default Home