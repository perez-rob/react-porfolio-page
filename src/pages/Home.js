import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Parallax from "../components/Parallax";
import Subheader from "../components/Subheader";
import Work from "../components/Work";
import bg2 from "../images/backgrounds/test-bg-2.png";
import bg1 from "../images/backgrounds/test-bg-1.png";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Subheader />
        <AboutMe />
        <Parallax imgSrc={bg2} />
        <Work />
        <Parallax imgSrc={bg1} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
