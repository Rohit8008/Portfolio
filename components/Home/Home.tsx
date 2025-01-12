import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
