import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Showcase from "../Showcase/Showcase";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Showcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
